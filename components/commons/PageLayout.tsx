import React from "react";
import Nav from "../sections/Nav/Nav";

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <div className="bg-gray-800 min-h-screen">
      <Nav />
      <main className="w-100 md:max-w-2xl m-auto">{children}</main>
    </div>
  );
}
