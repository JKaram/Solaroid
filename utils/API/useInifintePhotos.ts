import { useInfiniteQuery } from "react-query";
import axios from "axios";
import format from "date-fns/format";
import subWeeks from "date-fns/subWeeks";
import { apodUrl } from "../../constants";

interface QueryProps {
  startDate?: string;
  endDate?: string;
}

export const fetchInifitePhotos = async ({ pageParam = format(new Date(), "yyyy-MM-dd"), queryKey }: any) => {
  return await axios
    .get(apodUrl, {
      params: {
        api_key: `${process.env.NASA_API_KEY}`,
        start_date: format(subWeeks(new Date(pageParam), 1), "yyyy-MM-dd"),
        end_date: format(new Date(pageParam), "yyyy-MM-dd"),
      },
    })
    .then((res) => res.data.reverse());
};

const useInfinitePhotos = () =>
  useInfiniteQuery("photos", fetchInifitePhotos, {
    getNextPageParam: (lastPage) => {
      return lastPage[lastPage.length - 1].date;
    },
  });

export default useInfinitePhotos;
