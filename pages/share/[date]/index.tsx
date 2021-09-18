import React from "react";
import { fetchApod } from "../../../utils/API/usePhoto";
import PageLayout from "../../../components/commons/PageLayout";
import Image from "next/image";
export default function Share(props) {
  const { photo } = props;
  return (
    <PageLayout>
      <div className="relative h-96 ">
        <Image alt={photo.title} src={photo.url} layout="fill" objectFit="contain" />
      </div>
      <h1>{photo.title}</h1>
      <div>{photo.date}</div>
      <div>{photo.explanation}</div>
    </PageLayout>
  );
}

export async function getServerSideProps(context) {
  const photo = await fetchApod(new Date(context.query.date));

  return {
    props: { photo },
  };
}
