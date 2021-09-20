import React from "react";
import Nav from "../sections/Nav/Nav";

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  return (
    <div className="bg-hero-pattern text-white h-full min-h-screen pb-16">
      <Nav />
      <main className="w-100 md:max-w-3xl m-auto">{children}</main>
    </div>
  );
}
