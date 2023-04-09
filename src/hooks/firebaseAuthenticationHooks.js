import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, firebaseDatabase, GoogleProvider } from "../firebaseUtils";
import {
  query,
  getDocs,
  collection,
  where,
  addDoc,
  getDoc,
} from "firebase/firestore";
import { createCookie } from "./cookies";
export const handleGoogleLogin = async () => {
  try {
    const request = await signInWithPopup(auth, GoogleProvider);
    const user = request.user;
    const firebaseQuery = query(
      collection(firebaseDatabase, "users"),
      where("uid", "==", user.uid)
    );
    const queryResponse = await getDocs(firebaseQuery);
    const userData = {
      uid: auth.currentUser.uid,
      name: auth.currentUser.displayName,
      email: auth.currentUser.email,
      profilePhoto: auth.currentUser.photoURL,
      walletAmount: 0
    };
    if (queryResponse.docs.length === 0) {
      const res = await addDoc(collection(firebaseDatabase, "users"), userData);
    } else {
      
      queryResponse.docs.forEach((item) => {
        const dataItem = item.data();
        createCookie({ name: "userName", value: dataItem.name, validDays: 7 });
        createCookie({
          name: "userEmail",
          value: dataItem.email,
          validDays: 7,
        });
        createCookie({ name: "userUid", value: dataItem.uid, validDays: 7 });
        createCookie({
          name: "userPhoto",
          value: dataItem.profilePhoto,
          validDays: 7,
        });
      });
    }
    // alert("Successfully Signed Up!");
    var respone = {
      message: "User logged in successfully",
      status: 200,
      auth: userData
    };
    return respone;
  } catch (error) {
    alert("There might have been an error" + error.message);
    // console.log(error.message);
  }
};

export const handleSignUpWithEmail = async (username, email, password) => {
  try {
    const request = await createUserWithEmailAndPassword(auth, email, password);
    const user = request.user;
    const userData = {
      uid: auth.currentUser.uid,
      name: username,
      email: email,
      walletAmount: 0,
    };
    // alert("Successfully Signed Up!");
    const queryResponse = await addDoc(
      collection(firebaseDatabase, "users"),
      userData
    );
    createCookie({ name: "userName", value: username, validDays: 7 });
    createCookie({
      name: "userEmail",
      value: email,
      validDays: 7,
    });
    createCookie({ name: "userUid", value: user.uid, validDays: 7 });
  } catch (error) {
    alert("There might have been an error" + error.message);
  }
  var respone = {
    message: "User Signed up successfully",
    status: 200,
  };
  return respone;
};

export const handleLoginWithEmail = async (email, password) => {
  try {
    const request = await signInWithEmailAndPassword(auth, email, password);
    // console.log(request.user);
    const user = request.user;
    const firebaseQuery = query(
      collection(firebaseDatabase, "users"),
      where("uid", "==", user.uid)
    );
    const queryResponse = await getDocs(firebaseQuery);
    var dataItem
    queryResponse.docs.forEach((item) => {
      dataItem = item.data();
      // console.log(dataItem);
      createCookie({ name: "userName", value: dataItem.name, validDays: 7 });
      createCookie({
        name: "userEmail",
        value: dataItem.email,
        validDays: 7,
      });
      createCookie({ name: "userUid", value: dataItem.uid, validDays: 7 });
    });

    var respone = {
      message: "User logged in successfully",
      status: 200,
      auth: dataItem
    };
    return respone;
  } catch (error) {
    alert("There might have been an error" + error.message);
    // console.log(error);
  }
};

export const logout = () => {
  signOut(auth);
};
