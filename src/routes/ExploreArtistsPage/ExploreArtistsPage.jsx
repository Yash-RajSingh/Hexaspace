import ExploreArtists from "../../components/landing/Artist/ExploreArtists";
import Layout from "../../components/layout/Layout";
import { useEffect } from "react";

const ExploreArtistsPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Layout>
        <ExploreArtists />
      </Layout>
    </>
  );
};

export default ExploreArtistsPage;
