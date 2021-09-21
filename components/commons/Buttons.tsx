import React from "react";
import useAppState from "../../hooks/useAppState";
import { HeartIcon, ClipboardCopyIcon } from "@heroicons/react/solid";

export function LikeButton(props) {
  const { likes, addLike, removeLike } = useAppState();
  const { date } = props;
  return (
    <button
      onClick={() => (likes.includes(date) ? removeLike(date) : addLike(date))}
      className="flex items-center text-sm text-gray-200 px-1  rounded-md bg-white bg-opacity-25 hover:bg-opacity-50 active:bg-opacity-75 transition-all"
    >
      <HeartIcon className="h-4 w-4 text-red-500" />
      {likes.includes(date) ? "UnLike" : "Like"}
    </button>
  );
}

export function ShareButton(props) {
  const { date } = props;

  return (
    <button
      onClick={() => navigator.clipboard.writeText(`http://localhost:3000/share/${date}`)}
      className="flex items-center text-gray-200 px-3 py-2 rounded-md bg-white bg-opacity-25 hover:bg-opacity-50 active:bg-opacity-75 transition-all text-white"
    >
      <ClipboardCopyIcon className="h-5 w-5 text-blue-500" />
      Share Link
    </button>
  );
}
