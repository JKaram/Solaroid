import React, { useState } from "react";
import Image from "next/image";
import { IMGDTO } from "../../types";
import { LikeButton, ShareButton } from "../commons/Buttons";

interface Props {
  img: IMGDTO;
  onClick: Function;
}

export default function PhotoCard({ img, onClick }: Props) {
  return (
    <div className={`relative w-full h-64 md:h-96 drop-shadow-2xl rounded-lg overflow-hidden cursor-pointer `}>
      <Image alt={img.title} src={img.url} layout="fill" objectFit="cover" onClick={() => onClick()} />

      <div className="absolute flex flex-col md:flex-row justify-start md:justify-between  w-full bottom-0 text-white px-4 pt-8 pb-4 bg-gradient-to-t from-black to-transparent">
        <h1 className="font-bold text-xl">{img.title}</h1>
        <div className="flex space-x-1">
          <LikeButton date={img.date} />
          <ShareButton date={img.date} />
        </div>
      </div>
    </div>
  );
}
