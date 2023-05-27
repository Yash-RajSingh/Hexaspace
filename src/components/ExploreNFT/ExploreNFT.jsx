import { useContext } from "react";
import { NftCollectionContext } from "../../context/context";
import NftCard from "./NftCards/NftCard";
import { ExploreNFtContainer } from "./ExploreNFTElements";
import { useEffect } from "react";
import getNFTs from "../../hooks/getNFTs";
import AnimationComponent from "../../animation/animation";
const ExploreNft = () => {
  const { nftCollection, setNftCollection } = useContext(NftCollectionContext);
  useEffect(() => {
    if (!nftCollection) {
      console.log("data pop");
      (async () => {
        const NftData = await getNFTs();
        setNftCollection(NftData);
      })();
    }
  }, []);
  return (
    <>
      <ExploreNFtContainer>
        {nftCollection &&
          nftCollection.map((element, index) => (
            <AnimationComponent>
              <NftCard props={{ element, index }} />
            </AnimationComponent>
          ))}
      </ExploreNFtContainer>
    </>
  );
};

export default ExploreNft;
