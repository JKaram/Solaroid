import React from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import useAllPhotos, { getLikedPhotos } from "../utils/API/useAllPhotos";
import PhotoList from "../components/sections/PhotoList/PhotoList";
import PageLayout from "../components/commons/PageLayout";

const mergeQueries = (arr) => {
  let output = [];
  for (let elem of arr) {
    if (elem.status === "success") {
      output = [...output, elem.data];
    }
  }
  return output;
};

export default function MyLiked() {
  const photos = useAllPhotos();
  const merge = mergeQueries(photos);
  return (
    <PageLayout>
      <PhotoList data={merge} />
    </PageLayout>
  );
}
