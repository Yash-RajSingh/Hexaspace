import {
  BackButton,
  BtnIcon,
  ClickableText,
  GoogleBtn,
  InputField,
  InputLabel,
  LoginContainer,
  LoginHeading,
  LoginImageContainer,
  LoginPseudobody,
  LoginTitle,
  LoginViewWindow,
  LoginWrapper,
  SeparatorLine,
  SeparatorText,
  SeparatorWrapper,
  SubLoginWrapper,
} from "./LoginElements";
import Google from "../../assets/google.webp";
import { Button, Spacer } from "../common/common";
import { useState } from "react";
import Back from "../../assets/up.webp";
import { useNavigate } from "react-router-dom";
import { handleGoogleLogin } from "../../hooks/firebaseAuthenticationHooks";
import { useRef } from "react";
import {
  handleLoginValidation,
  handleSigninValidation,
} from "../../hooks/validation";
import { useContext } from "react";
import { AuthContext } from "../../context/context";
const Login = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  const [showSignup, setShowSignup] = useState(true);
  let navigate = useNavigate();
  const signinUsernameRef = useRef();
  const signinEmailRef = useRef();
  const signinPasswordRef = useRef();
  const signinConfirmPasswordRef = useRef();
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  return (
    <>
      <LoginContainer>
        {/* <BackButton>{"<"} </BackButton> */}
        <BackButton src={Back} onClick={() => navigate("/")} />
        <LoginHeading>HexaSpace</LoginHeading>
        <LoginPseudobody>
          <LoginImageContainer></LoginImageContainer>
          <LoginWrapper>
            <LoginViewWindow>
              {/* Login form  */}
              <SubLoginWrapper
                style={{
                  display: showSignup ? "block" : "none",
                  marginTop: "5%",
                }}
              >
                <LoginTitle>
                  Don't have an account?{" "}
                  <ClickableText onClick={() => setShowSignup(!showSignup)}>
                    Signup
                  </ClickableText>
                </LoginTitle>
                <Spacer top="7%" />
                <InputLabel>Email : </InputLabel>
                <InputField placeholder="you@example.com" ref={loginEmailRef} />
                <InputLabel>Password: </InputLabel>
                <InputField
                  placeholder="Enter 6 characters or more"
                  ref={loginPasswordRef}
                />
                <div style={{ textAlign: "center" }}>
                  <Button
                    size={"14rem"}
                    color
                    onClick={async () => {
                      var request = await handleLoginValidation(
                        loginEmailRef.current.value,
                        loginPasswordRef.current.value
                      );
                      if (request && request.status == 200) {
                        setAuthState(request.auth);
                        navigate("/");
                      }
                      // console.log(request);
                    }}
                  >
                    Login
                  </Button>
                </div>
                <SeparatorWrapper>
                  <SeparatorLine></SeparatorLine>
                  <SeparatorText>OR</SeparatorText>
                  <SeparatorLine> </SeparatorLine>
                </SeparatorWrapper>
                <GoogleBtn
                  onClick={async () => {
                    var request = await handleGoogleLogin();
                    if (request && request.status == 200) {
                      setAuthState(request.auth);
                      sessionStorage.setItem("authStatus", true);
                      navigate("/");
                    }
                  }}
                >
                  <BtnIcon src={Google} />
                  Login With Google
                </GoogleBtn>
              </SubLoginWrapper>
              {/* Signup form  */}
              <SubLoginWrapper>
                <LoginTitle>Create Account</LoginTitle>
                <InputLabel>Username : </InputLabel>
                <InputField placeholder="username" ref={signinUsernameRef} />
                <InputLabel>Email : </InputLabel>
                <InputField
                  placeholder="you@example.com"
                  ref={signinEmailRef}
                />
                <InputLabel>Password: </InputLabel>
                <InputField
                  placeholder="Enter 6 characters or more"
                  ref={signinPasswordRef}
                />
                <InputLabel>Confirm password: </InputLabel>
                <InputField
                  placeholder="Re-enter password"
                  ref={signinConfirmPasswordRef}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    size={"14rem"}
                    color
                    onClick={async () => {
                      var request = await handleSigninValidation(
                        signinUsernameRef.current.value,
                        signinEmailRef.current.value,
                        signinPasswordRef.current.value,
                        signinConfirmPasswordRef.current.value
                      );
                      if (request && request.status == 200) {
                        setShowSignup(!showSignup);
                      }
                    }}
                  >
                    Signup
                  </Button>
                  <GoogleBtn
                    onClick={async () => {
                      var request = await handleGoogleLogin();
                      if (request && request.status == 200) {
                        setAuthState(request.auth);
                        sessionStorage.setItem("authStatus", true);
                        navigate("/");
                      }
                    }}
                  >
                    <BtnIcon src={Google} />
                    Google signup
                  </GoogleBtn>
                </div>
                {/* <SeparatorWrapper>
                  <SeparatorLine></SeparatorLine>
                  <SeparatorText>OR</SeparatorText>
                  <SeparatorLine> </SeparatorLine>
                </SeparatorWrapper>
                <GoogleBtn onClick={handleGoogleLogin}>
                  <BtnIcon src={Google} />
                  Signup With Google
                </GoogleBtn> */}
              </SubLoginWrapper>
            </LoginViewWindow>
          </LoginWrapper>
        </LoginPseudobody>
      </LoginContainer>
    </>
  );
};

export default Login;
