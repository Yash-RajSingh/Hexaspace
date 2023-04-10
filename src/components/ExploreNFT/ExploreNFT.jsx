import { useContext } from "react";
import { NftCollectionContext } from "../../context/context";
import NftCard from "./NftCards/NftCard";
import { ExploreNFtContainer } from "./ExploreNFTElements";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firebaseDatabase } from "../../firebaseUtils";
const ExploreNft = () => {
  const { nftCollection, setNftCollection } = useContext(NftCollectionContext);
  useEffect(() => {
    if (!nftCollection) {
      console.log("data pop");
      (async () => {
        const collectionData = await getDocs(
          collection(
            firebaseDatabase,
            `${import.meta.env.VITE_APP_FB_COLLECTION_NAME}`
          )
        );
        const filteredCollectionData = collectionData.docs.map((doc) => ({
          ...doc.data(),
          nft_id: doc.id,
        }));
        // const output = new Date(filteredCollectionData[0].createdAt.seconds * 1000);
        setNftCollection(filteredCollectionData);
      })();
    }
  }, []);
  return (
    <>
      <ExploreNFtContainer>
        {nftCollection &&
          nftCollection.map((element, index) => (
            <NftCard props={{ element, index }} />
          ))}
      </ExploreNFtContainer>
    </>
  );
};

export default ExploreNft;
