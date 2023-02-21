import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
const Spin = keyframes`
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
`;

const Loader = styled.div`
  display: inline-block;
  position: relative;
  &::after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: ${Spin} 1.2s infinite;
  }
`;
const PreloaderContainer = styled.div`
  position: fixed;
  /* background: linear-gradient(
      221deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(255, 58, 0, 1) 200%
    )
    fixed; */
  background: var(--light-orange);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const Preloader = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
      // document.getElementsByTagName("body")[0].style.overflowY = "auto";
    }, 1500);
  }, []);
  return (
    <>
      {show && (
        <PreloaderContainer>
          <Loader />
        </PreloaderContainer>
      )}
    </>
  );
};

export default Preloader;
