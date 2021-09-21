import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
interface Props {
  //   children: React.ReactNode;
  isScroll: boolean;
  rest?: any;
}
export default function Nav(props: Props) {
  const router = useRouter();
  const { isScroll = true } = props;
  return (
    <nav
      className={`w-100  m-auto flex justify-between align-middle items-end py-4 mb-4 text-white sticky top-0 z-50 transition-all  ${
        !isScroll && "bg-spacedarkpurple shadow-2xl"
      } `}
      {...props.rest}
    >
      <div className="m-auto w-full flex px-2 justify-between items-end md:max-w-3xl">
        <div className="">
          <Link href="/">
            <div className="flex cursor-pointer items-end ">
              <Image src="/solaroid.svg" alt="logo" width="100%" height="45" />
              <h1 className="hidden sm:block text-2xl m-0 font-bold ">Solaroid</h1>
            </div>
          </Link>
        </div>
        <span
          className={`text-xl text-white cursor-pointer border-b-2 border-spacepink hover:bg-spacepink hover:border-spacepink ${
            router.pathname === "/MyLiked" && "font-bold"
          }`}
        >
          <Link href="/MyLiked">My Liked</Link>
        </span>
      </div>
    </nav>
  );
}
