import styled from "styled-components";
import Header from "../header/Header";
import Preloader from "../preloader/preloader";
const Pseudobody = styled.div`
  width: 95%;
  border: 1px solid white;
  margin: 1% auto;
`;
const Layout = (props) => {
  return (
    <>
      <Preloader />
      <Header />
      <Pseudobody>{props.children}</Pseudobody>
    </>
  );
};

export default Layout;
