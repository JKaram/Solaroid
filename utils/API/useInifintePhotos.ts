import { useInfiniteQuery } from "react-query";
import axios from "axios";

const potdUrl = "https://api.nasa.gov/planetary/";

export const fetchAllUsers = async (): Promise<any[]> => {
  return await axios
    .get(potdUrl, {
      params: {
        api_key: `${process.env.NASA_API_KEY}`,
        count: 7,
      },
    })
    .then((res) => res.data);
};

const useInfinitePhotos = () =>
  useInfiniteQuery(
    "photos",
    fetchAllUsers
    // { getNextPageParam: (page) => (page.current_page === page.last_page ? undefined : page.current_page + 1) },
    // { initialData: videos }
  );

export default useInfinitePhotos;
