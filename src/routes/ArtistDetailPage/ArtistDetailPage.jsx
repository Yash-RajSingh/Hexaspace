import Layout from "../../components/layout/Layout";
import ArtistDetail from "../../components/ArtistDetail/ArtistDetail";
import { useEffect } from "react";

const ArtistDetailPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Layout>
        <ArtistDetail />
      </Layout>
    </>
  );
};

export default ArtistDetailPage;
