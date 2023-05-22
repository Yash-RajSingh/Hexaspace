import styled from "styled-components";
import Header from "../header/Header";
import Preloader from "../preloader/Preloader";
import Footer from "../Footer/Footer";
const Pseudobody = styled.div`
  width: 92%;
  /* border: 1px solid white; */
  margin: 1% auto;
`;
const Layout = (props) => {
  return (
    <>
      <Preloader />
      <Header />
      <Pseudobody>{props.children}</Pseudobody>
      <Footer />
    </>
  );
};

export default Layout;
