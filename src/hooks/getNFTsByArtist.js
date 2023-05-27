import { firebaseDatabase } from "../firebaseUtils";
import { collection, query, where, getDocs } from "firebase/firestore";
const getNFTsByArtist = async (userId) => {
  try {
    const collectionRef = collection(
      firebaseDatabase,
      `${import.meta.env.VITE_APP_FB_COLLECTION_NAME}`
    );
    const firebaseQuery = query(
      collectionRef,
      where("creatorId", "==", userId)
    );
    const querySnapshot = await getDocs(firebaseQuery);
    const artistNFTs = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      docId: doc.id,
    }));
    return {
      artistNFTs,
      status: 200,
    };
  } catch (error) {
    console.log(error);
    return {
      message: "The artist does not have any NFTs for sale",
      status: 400,
    };
  }
};

export default getNFTsByArtist;
