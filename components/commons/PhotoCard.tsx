import React, { useState } from "react";
import Image from "next/image";
import { IMGDTO } from "../../types";
import useAppState from "../../hooks/useAppState";
import { Transition } from "@headlessui/react";
import { HeartIcon, ClipboardCopyIcon } from "@heroicons/react/solid";

interface Props {
  img: IMGDTO;
  onClick: Function;
}

const randomColors = ["spacedarkblue", "spacepink", "spacedarkpurple", "spacedarkpink"];

export default function PhotoCard({ img, onClick }: Props) {
  const { likes, addLike, removeLike } = useAppState();
  const [isShowing, setIsShowing] = useState(true);
  const randomColor = randomColors[Math.floor(Math.random() * randomColors.length)];
  return (
    <div
      className={`relative  w-full h-64 md:h-96 drop-shadow-2xl rounded-lg overflow-hidden cursor-pointer `}
      onMouseOver={() => setIsShowing(true)}
      onMouseLeave={() => setIsShowing(false)}
    >
      <Image alt={img.title} src={img.url} layout="fill" objectFit="cover" onClick={() => onClick()} />

      <Transition
        show={true}
        enter="transition-opacity duration-100 ease-out"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="absolute flex flex-col md:flex-row justify-start md:justify-between  w-full bottom-0 text-white px-4 py-4 bg-gradient-to-t from-black to-transparent">
          <h1 className="font-bold text-xl">{img.title}</h1>
          <div className="flex space-x-1">
            <button
              onClick={() => (likes.includes(img.date) ? removeLike(img.date) : addLike(img.date))}
              className="flex items-center text-sm text-gray-200 px-1  rounded-md bg-white bg-opacity-25 hover:bg-opacity-50 active:bg-opacity-75 transition-all"
            >
              <HeartIcon className="h-4 w-4 text-red-500" />
              {likes.includes(img.date) ? "UnLike" : "Like"}
            </button>
            <button
              onClick={() => navigator.clipboard.writeText(`http://localhost:3000/share/${img.date}`)}
              className="flex items-center text-gray-200 px-3 py-2 rounded-md bg-white bg-opacity-25 hover:bg-opacity-50 active:bg-opacity-75 transition-all text-white"
            >
              <ClipboardCopyIcon className="h-5 w-5 text-blue-500" />
              Share Link
            </button>
          </div>
        </div>
      </Transition>
    </div>
  );
}
