import { useRef, useEffect } from "react";
import type { NextPage } from "next";
import useInfinitePhotos from "../utils/API/useInifintePhotos";
import PageLayout from "../components/commons/PageLayout";
import PhotoList from "../components/sections/PhotoList/PhotoList";
const Home: NextPage = () => {
  const { data, fetchNextPage, isLoading } = useInfinitePhotos();

  return (
    <PageLayout>
      <PhotoList data={data} fetchMorePhotos={fetchNextPage} isLoading={isLoading} />
    </PageLayout>
  );
};

export default Home;
