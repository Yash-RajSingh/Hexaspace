import { HeaderContainer, Headermage, HeaderTitle, HeaderWrapper, NavButton, ProfileImage, SubHeaderContainer } from "./HeaderElements";
import {Button} from '../common/common'
import HexaLogo from '../../assets/logo.png'
import ProfileLogo from '../../assets/profile.png'
import { useContext } from "react";
import { AuthContext } from "../../context/context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const {auth, setAuth} = useContext(AuthContext);
  const [showHeader, setShowHeader] = useState(true);

  const navigate = useNavigate();
  useEffect(()=>{
    if (window.location.href.includes('/login')){
      setShowHeader(false)
    }
  }, [window.location.href])
  return (
    <>
      <HeaderContainer style={{display: showHeader ? "block" : "none"}}>
        <HeaderWrapper>
          <SubHeaderContainer gap={"5%"}>
            <Headermage src={HexaLogo} />
            <HeaderTitle>Hexaspace</HeaderTitle>
          </SubHeaderContainer>
          <SubHeaderContainer
            gap={"10%"}
            style={{ justifyContent: "space-evenly" }}
          >
            <NavButton>Home</NavButton>
            <NavButton>Sell</NavButton>
            <NavButton>Explore</NavButton>
          </SubHeaderContainer>
          <SubHeaderContainer style={{ justifyContent: "flex-end" }}>
            {auth ? 
            <ProfileImage src={ProfileLogo} />
            : 
            <Button size={"7rem"} color onClick={()=> navigate('/login')}>Login</Button>
          }
          </SubHeaderContainer>
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
}
 
export default Header;