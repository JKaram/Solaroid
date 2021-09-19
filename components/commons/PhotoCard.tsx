import React from "react";
import Image from "next/image";
import { IMGDTO } from "../../types";
import useAppState from "../../hooks/useAppState";

interface Props {
  img: IMGDTO;
  onClick: Function;
}

export default function PhotoCard({ img, onClick }: Props) {
  const { likes, addLike, removeLike } = useAppState();
  return (
    <div className="relative w-full h-96  rounded-lg overflow-hidden cursor-pointer">
      <Image alt={img.title} src={img.url} layout="fill" objectFit="cover" onClick={() => onClick()} />
      <button
        onClick={() => (likes.includes(img.date) ? removeLike(img.date) : addLike(img.date))}
        className="absolute text-white top-3 left-3"
      >
        {likes.includes(img.date) ? "UnLike" : "Like"}
      </button>
      <button
        onClick={() => navigator.clipboard.writeText(`http://localhost:3000/share/${img.date}`)}
        className="absolute text-white right-3 top-3 animate-bounce"
      >
        Share Link
      </button>
    </div>
  );
}
