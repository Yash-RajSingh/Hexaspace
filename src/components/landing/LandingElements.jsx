import styled, { keyframes } from "styled-components";

export const LandingContainer = styled.div`
  /* border: 1px solid white; */
`;
const hovering = keyframes`
  0% {
    margin-top: 0;
  }
  50% {
    margin-top: -10px;
  }
  100% {
    margin-top: 0;
  }
`;

export const LandingWrapper = styled.div`
  /* border: 1px solid gold; */
  margin-top: 3%;
  display: flex;
`;
export const LandingSubwrapper = styled.div`
  width: 50%;
  /* border: 1px solid pink; */
  padding: 1rem 1.5rem;
`;
export const LandingHeading = styled.p`
  font-size: 3rem;
  color: var(--white);
  font-family: "Tilt Warp";
  line-height: 1.35;
  margin-top: 5%;
`;
export const LandingInfoText = styled.p`
  color: var(--white);
  font-size: 1.5rem;
  line-height: 2;
  margin-top: 5%;
  font-family: "Joan";
  letter-spacing: 0.5px;
`;
export const OrangeText = styled.span`
  color: var(--dark-orange);
`;
export const LandingMoonImage = styled.img`
  width: ${(props) => (props.bigger ? "80%" : "35%")};
  transform: rotate(${(props) => (props.bigger ? "-25deg" : "30deg")});
  float: ${(props) => (props.bigger ? "" : "right")};
  margin-right: ${(props) => (props.bigger ? "" : "5%")};
  margin-top: -3%;
  /* animation: 2s ${hovering} infinite ease-in-out;
  animation-play-state: ${(props) => (props.bigger ? "running" : "paused")}; */
`;
