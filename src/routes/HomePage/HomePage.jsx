import Landing from "../../components/landing/Landing";
import Partners from "../../components/landing/Partners/Partners";
import Stats from "../../components/landing/Stats/Stats";
import Slider from "../../components/landing/Slider/Slider";
import Layout from "../../components/layout/Layout";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Landing />
        <Stats />
        <Partners />
        <Slider />
      </Layout>
    </>
  );
};

export default HomePage;
