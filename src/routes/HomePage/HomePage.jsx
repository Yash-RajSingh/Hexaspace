import Landing from "../../components/landing/Landing";
import Partners from "../../components/landing/Partners/Partners";
import Stats from "../../components/landing/Stats/Stats";
import Layout from "../../components/layout/Layout";

const HomePage = () => {
  return (
    <>
      <Layout>
        <Landing />
        <Stats />
        <Partners />
      </Layout>
    </>
  );
};

export default HomePage;
