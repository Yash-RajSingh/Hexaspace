import {
  ArrowUp,
  HeaderContainer,
  Headermage,
  HeaderProfileContainer,
  HeaderTitle,
  HeaderWrapper,
  NavButton,
  PopUp,
  PopupBody,
  PopupOptions,
  ProfileImage,
  SubHeaderContainer,
} from "./HeaderElements";
import { Button } from "../common/common";
import HexaLogo from "../../assets/logo.png";
import ProfileLogo from "../../assets/profile.png";
import { useContext } from "react";
import { AuthContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { auth } from "../../firebaseUtils";
import { deleteCookie, getCookies } from "../../hooks/cookies";
import { logout } from "../../hooks/firebaseAuthenticationHooks";

const Header = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  const [showHeader, setShowHeader] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.href.includes("/login")) {
      setShowHeader(false);
    }
    setIsLoggedIn(auth?.currentUser?.displayName || getCookies({ name: "userName" }));
  }, [window.location.href]);
  return (
    <>
      <HeaderContainer style={{ display: showHeader ? "block" : "none" }}>
        <HeaderWrapper>
          <SubHeaderContainer gap={"5%"}>
            <Headermage src={HexaLogo} />
            <HeaderTitle>Hexaspace</HeaderTitle>
          </SubHeaderContainer>
          <SubHeaderContainer
            gap={"10%"}
            style={{ justifyContent: "space-evenly" }}
          >
            <NavButton onClick={() => navigate("/")}>Home</NavButton>
            <NavButton onClick={() => navigate("/sell")}>Sell</NavButton>
            <NavButton onClick={() => navigate("/explore")}>Explore</NavButton>
          </SubHeaderContainer>
          <SubHeaderContainer style={{ justifyContent: "flex-end" }}>
            {isLoggedIn ? (
              <HeaderProfileContainer>
                <ProfileImage
                  src={getCookies({ name: "userPhoto" }) === null ? ProfileLogo : getCookies({name: "userPhoto"})}
                  onClick={() => setShowOptions(!showOptions)}
                />
                <PopUp style={{ display: showOptions ? "" : "none" }}>
                  <PopupBody>
                    <ArrowUp></ArrowUp>
                    <PopupOptions>Profile</PopupOptions>
                    <hr style={{ opacity: 0.5 }} />
                    <PopupOptions
                      onClick={() => {
                        logout();
                        deleteCookie({ name: "userUid" });
                        deleteCookie({ name: "userName" });
                        deleteCookie({ name: "userEmail" });
                        deleteCookie({ name: "userPhoto" });
                        setAuthState(false);
                        setIsLoggedIn(false);
                        navigate("/");
                      }}
                    >
                      Logout
                    </PopupOptions>
                  </PopupBody>
                </PopUp>
              </HeaderProfileContainer>
            ) : (
              <Button size={"7rem"} color onClick={() => navigate("/login")}>
                Login
              </Button>
            )}
          </SubHeaderContainer>
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;
