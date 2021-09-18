import format from "date-fns/format";
import axios from "axios";
import { useQuery } from "react-query";
import { IMGDTO } from "../../types";
import { apodUrl } from "../../constants";

export const fetchApod = async (date: Date): Promise<IMGDTO> => {
  return await axios
    .get(apodUrl, {
      params: {
        api_key: `${process.env.NASA_API_KEY}`,
        date: format(date, "yyyy-MM-dd"),
      },
    })
    .then((res) => res.data);
};

// export default function usePhoto(date: Date) {
//   return useQuery(["photo"], () => fetchApod(date));
// }
