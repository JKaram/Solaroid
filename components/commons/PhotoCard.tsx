import React, { useState } from "react";
import Image from "next/image";
import { IMGDTO } from "../../types";
import useAppState from "../../hooks/useAppState";
import { Transition } from "@headlessui/react";
import { ClipboardCopyIcon } from "@heroicons/react/solid";
import { LikeButton, ShareButton } from "../commons/Buttons";
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
      className={`relative w-full h-64 md:h-96 drop-shadow-2xl rounded-lg overflow-hidden cursor-pointer `}
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
            <LikeButton date={img.date} />
            <ShareButton date={img.date} />
          </div>
        </div>
      </Transition>
    </div>
  );
}
