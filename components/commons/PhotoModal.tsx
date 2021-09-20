import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { IMGDTO } from "../../types";
import Image from "next/image";
import format from "date-fns/format";
import useAppState from "../../hooks/useAppState";
import { XIcon } from "@heroicons/react/solid";
import addDays from "date-fns/addDays";

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
            <div className="relative bg-gradient-to-b from-spacedarkpurple via-spacedarkblue to-spacedarkblue text-white rounded max-w-4xl w-11/12 2xl:w-full  my-4">
              <XIcon
                onClick={() => onClose()}
                className="absolute right-1
                 h-6 w-6 cursor-pointer z-50 text-red-500 hover:text-red-900"
              />
              {img && (
                <>
                  <figure className="relative h-96 my-3">
                    <Image alt={img.title} src={img.url} width="100%" height="100%" layout="fill" objectFit="contain" />
                  </figure>

                  <div className="px-2 pb-2">
                    <h1 className="text-2xl font-bold mt-1">{img.title}</h1>
                    <h2 className="text-lg mb-2">{img.copyright}</h2>
                    <time>{format(addDays(new Date(img.date), 1), "MMMM do yyyy")}</time>
                    <div className="mt-3">{img.explanation}</div>
                  </div>
                </>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
