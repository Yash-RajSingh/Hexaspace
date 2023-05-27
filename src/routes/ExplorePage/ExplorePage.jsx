import ExploreNft from "../../components/ExploreNFT/ExploreNFT";
import Layout from "../../components/layout/Layout";
import { useEffect } from "react";

const ExplorePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Layout>
        <ExploreNft />
      </Layout>
    </>
  );
};

export default ExplorePage;
