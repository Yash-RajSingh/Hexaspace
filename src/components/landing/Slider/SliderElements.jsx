import styled from "styled-components";
import { PartnersTitle } from "../Partners/PartnersElements";

export const SliderContainer = styled.div`
  margin-top: 10%;
  padding: 0 2rem 2rem;
`;

export const SwiperStyle = {
  width: "90%",
  margin: " 0 auto",
  padding: "1rem 0",
  height: "100%",
};
export const NftSectionHeader = styled(PartnersTitle)`
  margin: 0 0 2%;
`;
export const SliderItem = styled.div`
  width: 25rem;
  background: url(${(props) => props.bg});
  min-height: 30rem;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  border-radius: 1rem;
`;
export const SliderDetailContainer = styled.div`
  width: 85%;
  margin: 0 auto 7%;
  backdrop-filter: blur(100px);
  padding: 1rem 0.75rem;
  border-radius: 7px;
`;

export const NftName = styled.p`
  color: white;
  font-size: 1rem;
  line-height: 1.2;
  letter-spacing: 1px;
  font-family: "Joan";
  text-align:center;
`;

export const NftSubDetail = styled.div`
  background: rgba(255, 255, 255, 0.25);
  border-radius: 13px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(16.9px);
  -webkit-backdrop-filter: blur(16.9px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 0.25rem;
  display: flex;
  justify-content: space-evenly;
  /* align-items: center; */
  width: 90%;
  margin: 2% auto 0;
`;
export const NftSubDetailItem = styled.div``;
export const NftInfoText = styled.p`
  color: black;
  font-size: 0.9rem;
`;
