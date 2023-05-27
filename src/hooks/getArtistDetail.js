import { firebaseDatabase } from "../firebaseUtils";
import { collection, query, where, getDocs } from "firebase/firestore";

const getArtistDetail = async (userId) => {
  try{
    const collectionRef = collection(
      firebaseDatabase,
      `${import.meta.env.VITE_APP_FB_USERCOLLECTION_NAME}`
    );
    const firebaseQuery = query(collectionRef, where('uid', '==', userId));
    const querySnapshot = await getDocs(firebaseQuery);
    const userData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      docId: doc.id,
    }));
    return {
      userData: userData[0],
      status: 200
    }; 
  } catch (error) {
    console.log(error)
    return {
      message:"Error fetching the artist details",
      status: 400,
    }; 
  }
}
 
export default getArtistDetail;