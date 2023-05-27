import Landing from "../../components/landing/Landing";
import Partners from "../../components/landing/Partners/Partners";
import Stats from "../../components/landing/Stats/Stats";
import Slider from "../../components/landing/Slider/Slider";
import Layout from "../../components/layout/Layout";
import ExploreNftSection from "../../components/ExploreNFT/ExploreNftSection";
import ArtistSection from "../../components/landing/Artist/ArtistSection";
import Community from "../../components/landing/Community";
import { useEffect } from "react";
import AnimationComponent from "../../animation/animation";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Layout>
        <Landing />
        <AnimationComponent>
          <Stats />
        </AnimationComponent>
        <AnimationComponent>
          <Partners />
        </AnimationComponent>
        <AnimationComponent>
          <Slider />
        </AnimationComponent>
        <AnimationComponent>
          <ExploreNftSection />
        </AnimationComponent>
        <AnimationComponent>
          <ArtistSection />
        </AnimationComponent>
        <AnimationComponent>
          <Community />
        </AnimationComponent>
      </Layout>
    </>
  );
};

export default HomePage;
