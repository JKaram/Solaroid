import React from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import useAllPhotos, { getLikedPhotos } from "../utils/API/useAllPhotos";
import PhotoList from "../components/sections/PhotoList/PhotoList";

export default function MyLiked() {
  const photos = useAllPhotos();
  return (
    <div>
      My Liked Page
      {/* <PhotoList data={props.data} /> */}
    </div>
  );
}
