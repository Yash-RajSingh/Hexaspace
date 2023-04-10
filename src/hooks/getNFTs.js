import { collection, getDocs } from "firebase/firestore";
import { firebaseDatabase } from "../firebaseUtils";
const getNFTs = async () => {
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
  return filteredCollectionData;
};

export default getNFTs;
