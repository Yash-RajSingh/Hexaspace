import { collection, doc, getDoc, increment, updateDoc } from "firebase/firestore";
import { firebaseDatabase } from "../firebaseUtils";

const UpdateArtist = async (docId) => {
  const docRef = doc(
    firebaseDatabase,
    `${import.meta.env.VITE_APP_FB_USERCOLLECTION_NAME}`,
    docId
  );
  const docItem = await getDoc(docRef);
  const artworkCount = docItem.data().artworkCount
  await updateDoc(docRef, {
    isArtist: true,
    artworkCount: artworkCount+1
  });
  return "You're a creator now"
}
 
export default UpdateArtist;