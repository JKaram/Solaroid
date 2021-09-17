import { useRef, useEffect } from "react";
import type { NextPage } from "next";
import useInfinitePhotos from "../utils/API/useInifintePhotos";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import PageLayout from "../components/commons/PageLayout";
const Home: NextPage = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  const { status, data, isFetching, isFetchingNextPage, fetchNextPage, hasNextPage } = useInfinitePhotos();

  useEffect(() => {
    isVisible && fetchNextPage();
  }, [isVisible]);

  return (
    <PageLayout>
      {data?.pages.map((page) => (
        <>
          {page.map((elem: any) => (
            <p className="my-10" key={elem.hdurl}>
              {elem.date}
            </p>
          ))}
        </>
      ))}
      <div
        ref={ref}
        style={{
          display: "flex",
          border: "1px dashed #000",
        }}
      >
        Heyyyyyyy
      </div>
      <button onClick={() => fetchNextPage()}>nextPage</button>
    </PageLayout>
  );
};

export default Home;
