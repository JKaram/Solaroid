import React, { useRef, useEffect } from "react";
import { IMGDTO } from "../../../types";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

interface Props {
  data: any;
  fetchMorePhotos: Function;
  isLoading: boolean;
}

export default function PhotoList({ data, fetchMorePhotos, isLoading }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    isVisible && fetchMorePhotos();
  }, [isVisible]);

  return (
    <>
      {data?.pages.map((page: any) => (
        <>
          {page.map((elem: any) => (
            <p className="my-10" key={elem.hdurl}>
              {elem.date}
            </p>
          ))}
        </>
      ))}
      <div ref={ref}>{isLoading ? "Loading" : ""}</div>
      <button onClick={() => fetchMorePhotos()}>nextPage</button>
    </>
  );
}
