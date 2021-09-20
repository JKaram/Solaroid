import React from "react";
import Image from "next/image";
import Link from "next/link";
interface Props {
  //   children: React.ReactNode;
  rest?: any;
}
export default function Nav(props: Props) {
  return (
    <nav
      className="w-100 md:max-w-2xl m-auto flex justify-between align-middle items-center px-2 py-4 bg-gray-800 mb-4 text-white sticky top-0 z-50"
      {...props.rest}
    >
      <div className="">
        <Link href="/">
          <div className="flex cursor-pointer items-center">
            <Image src="/solaroid.svg" alt="logo" width="100%" height="45" />
            <h1 className="text-2xl m-0 font-bold">Solaroid</h1>
          </div>
        </Link>
      </div>
      <Link href="/MyLiked">
        <span className="text-xl text-white cursor-pointer hover:border-white hover:border-2">My Liked</span>
      </Link>
    </nav>
  );
}
