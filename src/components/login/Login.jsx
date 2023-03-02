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
} from "./LoaginElements";
import Google from "../../assets/google.png";
import { Button, Spacer } from "../common/common";
import { useState } from "react";
import Back from "../../assets/up.png";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [showSignup, setShowSignup] = useState(true);
  let navigate = useNavigate()
  return (
    <>
      <LoginContainer>
        {/* <BackButton>{"<"} </BackButton> */}
        <BackButton src={Back} onClick={()=> navigate('/')} />
        <LoginPseudobody>
          <LoginImageContainer></LoginImageContainer>
          <LoginWrapper>
            <LoginHeading>HexaSpace</LoginHeading>
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
                <Spacer top="7%"/>
                <InputLabel >Email : </InputLabel>
                <InputField placeholder="you@example.com" />
                <InputLabel>Password: </InputLabel>
                <InputField placeholder="Enter 6 characters or more" />
                <div style={{ textAlign: "center" }}>
                  <Button size={"14rem"} color>
                    Login
                  </Button>
                </div>
                <SeparatorWrapper>
                  <SeparatorLine></SeparatorLine>
                  <SeparatorText>OR</SeparatorText>
                  <SeparatorLine> </SeparatorLine>
                </SeparatorWrapper>
                <GoogleBtn>
                  <BtnIcon src={Google} />
                  Login With Google
                </GoogleBtn>
              </SubLoginWrapper>
              {/* Signup form  */}
              <SubLoginWrapper>
                <LoginTitle>
                  Already have an account? {"  "}
                  <ClickableText onClick={() => setShowSignup(!showSignup)}>
                    Login
                  </ClickableText>
                </LoginTitle>
                <InputLabel>Email : </InputLabel>
                <InputField placeholder="you@example.com" />
                <InputLabel>Password: </InputLabel>
                <InputField placeholder="Enter 6 characters or more" />
                <InputLabel>Confirm password: </InputLabel>
                <InputField placeholder="Re-enter password" />
                <div style={{ textAlign: "center" }}>
                  <Button size={"14rem"} color>
                    Signup
                  </Button>
                </div>
                <SeparatorWrapper>
                  <SeparatorLine></SeparatorLine>
                  <SeparatorText>OR</SeparatorText>
                  <SeparatorLine> </SeparatorLine>
                </SeparatorWrapper>
                <GoogleBtn>
                  <BtnIcon src={Google} />
                  Signup With Google
                </GoogleBtn>
              </SubLoginWrapper>
            </LoginViewWindow>
          </LoginWrapper>
        </LoginPseudobody>
      </LoginContainer>
    </>
  );
};

export default Login;
