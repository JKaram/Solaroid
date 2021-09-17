import React from "react";
import { useRouter } from "next/router";

export default function Share() {
  const router = useRouter();
  const { photo } = router.query;
  return <div>{photo}</div>;
}
