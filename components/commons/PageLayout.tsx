import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import React, { useRef } from "react";
import Nav from "../sections/Nav/Nav";

interface Props {
  children: React.ReactNode;
}

export default function PageLayout({ children }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = entry?.isIntersecting;

  return (
    <div className="bg-hero-pattern text-white h-full min-h-screen pb-16">
      <div ref={ref}></div>
      <Nav isScroll={isVisible} />
      <main className="w-100 md:max-w-3xl m-auto">{children}</main>
    </div>
  );
}
