import React, { useEffect, useState } from "react";
import useAppState from "../../hooks/useAppState";
import { HeartIcon, ClipboardCopyIcon } from "@heroicons/react/solid";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";

export function LikeButton(props) {
  const { likes, addLike, removeLike } = useAppState();
  const { date } = props;
  const isLiked = likes.includes(date);
  return (
    <button
      onClick={() => (likes.includes(date) ? removeLike(date) : addLike(date))}
      className={`flex items-center  rounded px-2 border-2 bg-spacepink border-spacepink bg-opacity-30 transition-all hover:bg-opacity-60 ${
        isLiked && "bg-white border-white"
      }`}
    >
      <HeartIcon className={`h-4 w-4 text-spacepink ${isLiked && "text-white"}`} />
      {isLiked ? "Unlike" : "Like"}
    </button>
  );
}

export function ShareButton(props) {
  const { date } = props;
  const [value, copy] = useCopyToClipboard();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (copied) setCopied(false);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [copied]);

  return (
    <button
      onClick={() => {
        setCopied(true);
        copy(`${process.env.COPY_URL}${date}`);
      }}
      className="flex items-center"
    >
      <ClipboardCopyIcon className={`h-5 w-5 ${copied ? "text-spacepink" : "text-white"}`} />
      {copied && <span className="text-spacepink">Copied!</span>}
      {!copied && <span>Share</span>}
    </button>
  );
}
