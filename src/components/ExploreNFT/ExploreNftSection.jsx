import styled from "styled-components";
import { PartnersTitle } from "../landing/Partners/PartnersElements";
import { useContext } from "react";
import { NftCollectionContext } from "../../context/context";
import NftCard from "./NftCards/NftCard";
import { useNavigate } from "react-router-dom";
const ExploreNftSectionContainer = styled.div`
  margin-top: 10%;
  text-align: center;
`;
const ExploreNftSectionTitle = styled(PartnersTitle)`
  margin-top: 0;
`;
const ExploreNftWrapper = styled.div`
  display: flex;
  margin-top: 3%;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3%;
`;
const ExploreButton = styled.button`
  background: transparent;
  font-size: 1.5rem;
  color: var(--white);
  border: 1px solid white;
  padding: 0.7rem 3rem;
  border-radius: 1rem;
  margin: 5% auto 0;
  font-family: "Joan";
  font-weight: 600;
  letter-spacing: 2px;
  transition: all 500ms;
  cursor: pointer;
  text-align: center;
  &:hover {
    background: var(--light-orange);
  }
`;

const ExploreNftSection = () => {
  const { nftCollection, setNftCollection } = useContext(NftCollectionContext);
  let navigate = useNavigate();
  return (
    <>
      <ExploreNftSectionContainer>
        <ExploreNftSectionTitle>Top NFTs</ExploreNftSectionTitle>
        <ExploreNftWrapper>
          {nftCollection &&
            nftCollection
              .slice(10, 18)
              .map((element, index) => (
                <NftCard props={{ element, index }} key={"nftCard" + index} />
              ))}
        </ExploreNftWrapper>
        <ExploreButton onClick={() => navigate("/explore")}>
          Explore
        </ExploreButton>
      </ExploreNftSectionContainer>
    </>
  );
};

export default ExploreNftSection;
