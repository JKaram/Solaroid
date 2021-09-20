import React from "react";
import Image from "next/image";

export default function LoadingBar(props) {
  return (
    <div
      className="w-1/2 h-11 border-2 border-spacepink bg-spacepink bg-opacity-30 items-center justify-center flex m-auto mb-10 rounded py-4"
      {...props.rest}
    >
      <Image className="animate-spin bg-transparent my-2" alt="spinner" src="/spinner.svg" height="30" width="30" />
      Loading
    </div>
  );
}
