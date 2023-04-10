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
import { collection, getDocs } from "firebase/firestore";
import { firebaseDatabase } from "../../firebaseUtils";
import { useEffect,useContext } from "react";
import { NftCollectionContext, UpdateContext } from "../../context/context";
const Landing = () => {
  const { nftCollection, setNftCollection} = useContext(NftCollectionContext)
  const { update, setUpdate} = useContext(UpdateContext)
  useEffect(()=>{
    (async()=>{
      const collectionData = await getDocs(collection(firebaseDatabase, `${import.meta.env.VITE_APP_FB_COLLECTION_NAME}`));
      const filteredCollectionData = collectionData.docs.map((doc) => ({...doc.data(),nft_id: doc.id,}));
      // const output = new Date(filteredCollectionData[0].createdAt.seconds * 1000);
      setNftCollection(filteredCollectionData);
    })()
  },[update])
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