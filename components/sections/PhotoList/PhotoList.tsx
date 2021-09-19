import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import React, { useRef, useEffect, useState } from "react";
import PhotoModal from "../../commons/PhotoModal";
import PhotoCard from "../../commons/PhotoCard";
import { IMGDTO } from "../../../types";
import flatten from "lodash.flatten";

interface Props {
  data: any;
  fetchMorePhotos?: Function;
  isLoading?: boolean;
}

export default function PhotoList({ data, fetchMorePhotos, isLoading }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  let [moreInfo, setMoreInfo] = useState<IMGDTO | null>(null);

  const setInfo = (img: IMGDTO) => setMoreInfo(img);
  const unselectInfo = () => setMoreInfo(null);

  const flattenData = flatten(data);

  useEffect(() => {
    isVisible && fetchMorePhotos && fetchMorePhotos();
  }, [isVisible]);

  return (
    <div className="space-y-4">
      {moreInfo && <PhotoModal img={moreInfo} onClose={unselectInfo} />}
      {flattenData.map((elem: any) => {
        if (elem.media_type !== "image") null;
        else return <PhotoCard key={elem.hdurl} img={elem} onClick={() => setInfo(elem)} />;
      })}
      <div ref={ref}>{isLoading ? "Loading" : ""}</div>
    </div>
  );
}
