import {
  LandingContainer,
  LandingSubwrapper,
  LandingWrapper,
  LandingMoonImage,
  LandingHeading,
  OrangeText,
  LandingInfoText,
} from "./LandingElements";
import MoonImage from '../../assets/planet.png'
const Landing = () => {
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
}
 
export default Landing;