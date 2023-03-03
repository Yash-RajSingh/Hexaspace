import { handleLoginWithEmail, handleSignUpWithEmail } from "./firebaseHooks";

export const handleSigninValidation = async (
  username,
  email,
  password,
  confirmPassword
) => {
  if (
    username === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    alert("Please fill all the fields");
    return;
  }
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(mailformat)) {
    alert("Please enter a valid email");
    return;
  }
  if (password.length <= 6) {
    alert("Passwords must be of more than 6 characters");
    return;
  }
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }
  var request = await handleSignUpWithEmail(
    username,
    email,
    password,
    confirmPassword
  );
  return request;
};

export const handleLoginValidation = async (email, password) => {
  if (email === "" || password === "") {
    alert("Please fill all the fields");
    return;
  }
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(mailformat)) {
    alert("Please enter a valid email");
    return;
  }
  var request = await handleLoginWithEmail(email, password);
  return request;
};
