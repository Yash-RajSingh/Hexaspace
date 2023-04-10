import {
  LandingContainer,
  LandingSubwrapper,
  LandingWrapper,
  LandingMoonImage,
  LandingHeading,
  OrangeText,
  LandingInfoText,
} from "./LandingElements";
import MoonImage from "../../assets/planet.png";
import { useEffect, useContext } from "react";
import { NftCollectionContext, UpdateContext } from "../../context/context";
import getNFTs from "../../hooks/getNFTs";
const Landing = () => {
  const { nftCollection, setNftCollection } = useContext(NftCollectionContext);
  const { update, setUpdate } = useContext(UpdateContext);
  useEffect(() => {
    (async () => {
      const NftData = await getNFTs();
      setNftCollection(NftData);
      //   // const output = new Date(filteredCollectionData[0].createdAt.seconds * 1000);
    })();
  }, [update]);
  return (
    <>
      <LandingContainer>
        <LandingWrapper>
          <LandingSubwrapper>
            <LandingHeading>
              With <OrangeText>Hexaspace</OrangeText>, enjoy touching your
              imagination and discover NFT's
            </LandingHeading>
            <LandingInfoText>
              Sign up, personalise your space, upload your NFTs and start
              earning money.
            </LandingInfoText>
          </LandingSubwrapper>
          <LandingSubwrapper>
            <LandingMoonImage src={MoonImage} bigger />
            <LandingMoonImage src={MoonImage} paused />
          </LandingSubwrapper>
        </LandingWrapper>
      </LandingContainer>
    </>
  );
};

export default Landing;
