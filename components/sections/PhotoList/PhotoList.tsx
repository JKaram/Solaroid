import React, { useRef, useEffect, useState } from "react";
import { IMGDTO } from "../../../types";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import PhotoCard from "../../commons/PhotoCard";
import { Dialog } from "@headlessui/react";
import PhotoModal from "../../commons/PhotoModal";

interface Props {
  data: any;
  fetchMorePhotos: Function;
  isLoading: boolean;
}

export default function PhotoList({ data, fetchMorePhotos, isLoading }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  let [moreInfo, setMoreInfo] = useState<IMGDTO | null>(null);

  const setInfo = (img: IMGDTO) => setMoreInfo(img);
  const unselectInfo = () => setMoreInfo(null);

  useEffect(() => {
    isVisible && fetchMorePhotos();
  }, [isVisible]);

  return (
    <div className="space-y-4">
      {moreInfo && <PhotoModal img={moreInfo} onClose={unselectInfo} />}
      {data?.pages.map((page: any, i: number) => (
        <>
          {page.map((elem: any) => {
            if (elem.media_type !== "image") null;
            else return <PhotoCard key={elem.hdurl} img={elem} onClick={() => setInfo(elem)} />;
          })}
        </>
      ))}
      <div ref={ref}>{isLoading ? "Loading" : ""}</div>
      <button onClick={() => fetchMorePhotos()}>nextPage</button>
    </div>
  );
}
