import UploadNFT from "../../components/uploadNFT/UploadNFT";
import Layout from "../../components/layout/Layout";
import { useEffect } from "react";

const UploadNFTPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Layout>
        <UploadNFT />
      </Layout>
    </>
  );
};

export default UploadNFTPage;
