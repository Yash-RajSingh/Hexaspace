import { collection, getDocs } from "firebase/firestore";
import { firebaseDatabase } from "../firebaseUtils";
const getAllArtists = async () => {
  const collectionData = await getDocs(
    collection(
      firebaseDatabase,
      `${import.meta.env.VITE_APP_FB_USERCOLLECTION_NAME}`
    )
  );
  const filteredCollectionData = collectionData.docs.map((doc) => ({
    ...doc.data(),
  }));
  return filteredCollectionData;
};

export default getAllArtists;
