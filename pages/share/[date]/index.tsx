import React from "react";
import { fetchApod } from "../../../utils/API/usePhoto";
import PageLayout from "../../../components/commons/PageLayout";
import Image from "next/image";
import format from "date-fns/format";
import addDays from "date-fns/addDays";
import { LikeButton, ShareButton } from "../../../components/commons/Buttons";
export default function Share(props) {
  const { photo } = props;
  return (
    <PageLayout>
      <div className="relative h-96 ">
        <Image alt={photo.title} src={photo.url} layout="fill" objectFit="contain" />
      </div>
      <LikeButton date={photo.date} />
      <ShareButton date={photo.date} />
      <div className="mt-3 px-2">
        <h1 className="text-2xl font-bold">{photo.title}</h1>
        <div>{photo.copyright}</div>
        <div>{format(addDays(new Date(photo.date), 1), "MMMM do yyyy")}</div>
        <div className="my-3">{photo.explanation}</div>
      </div>
    </PageLayout>
  );
}

export async function getServerSideProps(context) {
  const photo = await fetchApod(context.query.date);

  return {
    props: { photo },
  };
}
