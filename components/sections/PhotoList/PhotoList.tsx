import useIntersectionObserver from "../../../hooks/useIntersectionObserver";
import React, { useRef, useEffect, useState } from "react";
import PhotoModal from "../../commons/PhotoModal";
import PhotoCard from "../../commons/PhotoCard";
import { IMGDTO } from "../../../types";
import flatten from "lodash.flatten";
import LoadingBar from "../../commons/LoadingBar";
import Empty from "../../commons/Empty";

interface Props {
  data: any;
  fetchMorePhotos?: Function;
  isLoading?: boolean;
}

export default function PhotoList({ data, fetchMorePhotos, isLoading }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  const [moreInfo, setMoreInfo] = useState<IMGDTO>(null);
  const [showModal, setShowModal] = useState(false);

  const setInfo = (img: IMGDTO) => setMoreInfo(img);
  const closeModal = () => setShowModal(false);

  const flattenData = flatten(data);

  useEffect(() => {
    isVisible && fetchMorePhotos && fetchMorePhotos();
  }, [isVisible]);

  return (
    <>
      <PhotoModal showModal={showModal} img={moreInfo} onClose={closeModal} />
      <div className="space-y-8">
        {!isLoading && (
          <Empty
            empty={!flattenData.length}
            error={false}
            status={"It's lonley out in space (Go like some pictures)"}
          />
        )}
        {flattenData.map((elem: any) => {
          if (elem.media_type !== "image") null;
          else
            return (
              <PhotoCard
                key={elem.hdurl}
                img={elem}
                onClick={() => {
                  setInfo(elem);
                  setShowModal(true);
                }}
              />
            );
        })}
        {fetchMorePhotos && <div ref={ref}>{isVisible && <LoadingBar />}</div>}
      </div>
    </>
  );
}
