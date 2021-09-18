import useInfinitePhotos from "../utils/API/useInifintePhotos";
import type { NextPage } from "next";
import PhotoList from "../components/sections/PhotoList/PhotoList";
import PageLayout from "../components/commons/PageLayout";
import useAppState from "../hooks/useAppState";
const Home: NextPage = () => {
  const { likes } = useAppState();
  const { data, fetchNextPage, isLoading } = useInfinitePhotos();

  return (
    <PageLayout>
      <PhotoList data={data} fetchMorePhotos={fetchNextPage} isLoading={isLoading} />
    </PageLayout>
  );
};

export default Home;
