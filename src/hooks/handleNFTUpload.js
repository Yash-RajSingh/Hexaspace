import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { firebaseDatabase, firebaseStorage } from "../firebaseUtils";
import { v4 } from "uuid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const handleNFTUpload = async (name, file, currency, price, creatorId, creatorName) => {
  const authStatus = sessionStorage.getItem("authStatus")
  if (name === "" || file === null || currency === "" || price === "") {
    alert("Fill all the fields");
    return;
  }
  var imageUpload = async (file) => {
      try{ const imageRef = ref(firebaseStorage, `NFTs/${file.name + v4()}`);
      const upload = await uploadBytes(imageRef, file);
      const URL = await getDownloadURL(upload.ref);
      return URL;
    }
      catch(err){
      alert("Error uploading image")
    }
  };
  var ImageDownloadUrl
  if(authStatus){
      ImageDownloadUrl = await imageUpload(file); 
  }
  else {
    return "User not logged in"
  }
  const NftCollectionRef = collection(firebaseDatabase, "NftCollection");
  const NftDoc = {
    NftName: name,
    ImageURL: ImageDownloadUrl,
    tradeCurrency: currency,
    price: price,
    createdAt: serverTimestamp(),
    creatorId: creatorId,
    creatorName:creatorName,
    currentBid: price
  };
  try {
    const AddNftRecord = await addDoc(NftCollectionRef, NftDoc)
    return AddNftRecord
  } catch (err){
    alert("Error uploading Nft", err)
  }
};

export default handleNFTUpload;
