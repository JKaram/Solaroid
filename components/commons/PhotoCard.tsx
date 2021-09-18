import React from "react";
import Image from "next/image";
import { IMGDTO } from "../../types";

interface Props {
  img: IMGDTO;
  onClick: Function;
}

export default function PhotoCard({ img, onClick }: Props) {
  return (
    <div className="relative w-full h-96" onClick={() => onClick()}>
      <Image alt={img.title} src={img.url} layout="fill" objectFit="cover" />
    </div>
  );
}
