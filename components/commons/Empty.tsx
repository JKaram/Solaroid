import React from "react";
import Image from "next/image";
export default function Empty({ empty, error, status }) {
  return (
    <div className={`text-white ${empty ? "block" : "hidden"} flex flex-col items-center`}>
      <Image src={"/empty.svg"} width="300" height="300" />
      {empty && !error && status}
      {error && "Looks like we have an error"}
    </div>
  );
}
