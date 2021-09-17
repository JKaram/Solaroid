import type { NextPage } from "next";
import useInfinitePhotos from "../utils/API/useInifintePhotos";

const Home: NextPage = () => {
  const { status, data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfinitePhotos();

  return (
    <div>
      {data?.pages.map((page) => (
        <>
          {page.map((elem: any) => (
            <p key={elem.hdurl}>{elem.date}</p>
          ))}
        </>
      ))}

      <button onClick={() => fetchNextPage()}>nextPage</button>
    </div>
  );
};

export default Home;
