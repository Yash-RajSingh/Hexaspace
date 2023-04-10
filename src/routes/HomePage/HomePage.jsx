import Landing from "../../components/landing/Landing";
import Partners from "../../components/landing/Partners/Partners";
import Stats from "../../components/landing/Stats/Stats";
import Slider from "../../components/landing/Slider/Slider";
import Layout from "../../components/layout/Layout";
import ExploreNftSection from "../../components/ExploreNFT/ExploreNftSection";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Landing />
        <Stats />
        <Partners />
        <Slider />
        <ExploreNftSection />
      </Layout>
    </>
  );
};

export default HomePage;
