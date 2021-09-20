import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IMGDTO } from "../../types";
import Image from "next/image";
import format from "date-fns/format";
import useAppState from "../../hooks/useAppState";

interface Props {
  img: IMGDTO | null;
  onClose: Function;
}

export default function PhotoModal({ img, onClose }: Props) {
  const { likes, removeLike, addLike } = useAppState();
  return (
    <Transition
      show={!!img}
      enter="transition duration-100 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <Dialog onClose={() => onClose()} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <div className="relative bg-white rounded w-11/12 mx-auto my-4 p-2">
            {img && (
              <>
                <div className="relative h-96 ">
                  <Image alt={img.title} src={img.url} layout="fill" objectFit="contain" />
                </div>
                <button
                  onClick={() => (likes.includes(img.date) ? removeLike(img.date) : addLike(img.date))}
                  className="absolute text-black top-1 left-1"
                >
                  {likes.includes(img.date) ? "UnLike" : "Like"}
                </button>
                <button
                  onClick={() => navigator.clipboard.writeText(`http://localhost:3000/share/${img.date}`)}
                  className="absolute text-black right-1"
                >
                  Share Link
                </button>
                <h1>{img.title}</h1>
                <time>{format(new Date(img.date), "MMMM do yyyy")}</time>
                <div>{img.explanation}</div>
              </>
            )}
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
