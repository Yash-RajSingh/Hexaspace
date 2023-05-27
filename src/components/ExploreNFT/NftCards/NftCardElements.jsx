import styled from "styled-components";
import { Button } from "../../common/common";

export const NftCardBody = styled.div`
  background: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 20rem;
  width: 15rem;
  margin-top: 3%;
  border: 3px solid rgba(0, 0, 0, 0.5);
  border-radius: 1rem 1rem 5px 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 2;
`;

export const NftCardName = styled.p`
  backdrop-filter: blur(900px);
  width: 90%;
  margin: 0 auto;
  text-align: center;
  padding: 0.25rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--white);
  font-family: "Joan";
  letter-spacing: 0.5px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  border-radius: 0 0 15px 15px;
  border: 0.25px solid rgba(255, 255, 255, 0.2);
`;

export const NftPriceContainer = styled.div`
  backdrop-filter: blur(900px);
  padding: 0.5rem;
  width: 100%;
  border-radius: 15px 15px 5px 5px;
  border: 0.25px solid rgba(255, 255, 255, 0.2);
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 15%;
`;

export const NftPrice = styled.div`
  background: linear-gradient(var(--light-orange), var(--dark-orange));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 900;
  font-family: "Tilt Warp";
  letter-spacing: 1px;
  font-size: 1.25rem;
  -webkit-text-stroke: 0.25px black;
  margin-left: 2%;
`;

export const BuyButton = styled(Button)`
  font-size: 0.8rem;
  padding: 0.15rem;
  border-radius: 5px;
`;
