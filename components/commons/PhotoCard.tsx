import React from "react";
import Image from "next/image";
import { IMGDTO } from "../../types";

interface Props {
  img: IMGDTO;
}

export default function PhotoCard({ img }: Props) {
  return (
    <div>
      <Image alt={img.title} src={img.url} layout="fill" objectFit="none" quality={100} />
    </div>
  );
}
