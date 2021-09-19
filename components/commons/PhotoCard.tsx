import React, { useState } from "react";
import Image from "next/image";
import { IMGDTO } from "../../types";
import useAppState from "../../hooks/useAppState";
import { Transition } from "@headlessui/react";

interface Props {
  img: IMGDTO;
  onClick: Function;
}

export default function PhotoCard({ img, onClick }: Props) {
  const { likes, addLike, removeLike } = useAppState();
  const [isShowing, setIsShowing] = useState(true);
  return (
    <div
      className="relative w-full h-96  rounded-lg overflow-hidden cursor-pointer"
      onMouseOver={() => setIsShowing(true)}
      onMouseLeave={() => setIsShowing(false)}
    >
      <Image alt={img.title} src={img.url} layout="fill" objectFit="cover" onClick={() => onClick()} />

      <Transition
        show={isShowing}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute flex justify-between w-full bottom-0 text-white px-2 py-4 from-black">
          <h1>{img.title}</h1>
          <div>
            <button
              onClick={() => (likes.includes(img.date) ? removeLike(img.date) : addLike(img.date))}
              className=" text-gray-200 px-3 py-2 rounded-md bg-white bg-opacity-25 hover:bg-opacity-50 active:bg-opacity-75 transition-all"
            >
              {likes.includes(img.date) ? "UnLike" : "Like"}
            </button>
            <button
              onClick={() => navigator.clipboard.writeText(`http://localhost:3000/share/${img.date}`)}
              className=" text-white"
            >
              {img.date}
              Share Link
            </button>
          </div>
        </div>
      </Transition>
    </div>
  );
}
