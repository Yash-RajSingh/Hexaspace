import { ref } from "firebase/storage";
import { v4 } from "uuid";
import { firebaseStorage } from "../firebaseUtils";

const UploadImage = (name, file) => {
  if (file == null) return;
  const imageRef = ref(firebaseStorage, `NFTs/${name + v4()}`);
  console.log(imageRef);
};

export default UploadImage;
