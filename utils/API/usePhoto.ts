import format from "date-fns/format";
import axios from "axios";
import { useQuery } from "react-query";
import { IMGDTO } from "../../types";
import { apodUrl } from "../../constants";

const fetchApod = async (date: Date): Promise<IMGDTO> => {
  return await axios
    .get(apodUrl, {
      params: {
        date: format(date, "yyyy-MM-dd"),
      },
    })
    .then((res) => res.data);
};

export default function usePhoto(date: Date) {
  return useQuery(["photo"], () => fetchApod(date));
}
