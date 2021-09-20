import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IMGDTO } from "../../types";
import Image from "next/image";
import format from "date-fns/format";
import useAppState from "../../hooks/useAppState";

interface Props {
  img: IMGDTO;
  showModal: boolean;
  onClose: Function;
}

export default function PhotoModal({ img, onClose, showModal }: Props) {
  const { likes, removeLike, addLike } = useAppState();
  return (
    <Transition show={showModal} as={Fragment}>
      <Dialog onClose={() => onClose()} className="fixed z-50 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200 "
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 " />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
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
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
