import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <div className="bg-gray-800">
      <nav className="flex justify-around">
        <div>Nav</div> <div>Likes</div>
      </nav>
      <main className="w-100 md:max-w-2xl m-auto">{children}</main>
    </div>
  );
}
