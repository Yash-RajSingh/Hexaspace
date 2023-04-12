import Landing from "../../components/landing/Landing";
import Partners from "../../components/landing/Partners/Partners";
import Stats from "../../components/landing/Stats/Stats";
import Slider from "../../components/landing/Slider/Slider";
import Layout from "../../components/layout/Layout";
import ExploreNftSection from "../../components/ExploreNFT/ExploreNftSection";
import ArtistSection from "../../components/landing/Artist/ArtistSection";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Landing />
        <Stats />
        <Partners />
        <Slider />
        <ExploreNftSection />
        <ArtistSection />
      </Layout>
    </>
  );
};

export default HomePage;
