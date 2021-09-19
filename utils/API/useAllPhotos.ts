import { useQueries } from "react-query";
import { fetchApod } from "../API/usePhoto";
import useAppState from "../../hooks/useAppState";
import useReadLocalStorage from "../../hooks/useReadLocalStorage";
import axios from "axios";

export const getLikedPhotos = async (likes) => {
  let promiseArray = likes.map((date) => fetchApod(new Date(date)));
  return await Promise.all(promiseArray)
    .then((results) => {
      return results;
    })
    .catch(console.log);
};

export default function useAllPhotos() {
  const { likes } = useAppState();
  const likedInStorage = useReadLocalStorage("likes");

  return useQueries(
    likes.map((elem, i) => {
      return { queryKey: ["like", elem], queryFn: () => fetchApod(elem) };
    })
  );
}
