import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <>
      <nav className="flex justify-around">
        <div>Nav</div> <div>Likes</div>
      </nav>
      <main className="w-100 m-auto">{children}</main>
    </>
  );
}
