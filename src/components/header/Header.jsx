import { HeaderContainer, Headermage, HeaderTitle, HeaderWrapper, NavButton, ProfileImage, SubHeaderContainer } from "./HeaderElements";
import {Button} from '../common/common'
import HexaLogo from '../../assets/logo.png'
import ProfileLogo from '../../assets/profile.png'
import { useContext } from "react";
import { AuthContext } from "../../context/context";

const Header = () => {
  const {auth, setAuth} = useContext(AuthContext)
  return (
    <>
      <HeaderContainer>
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
            <Button size={"7rem"} color>Login</Button>
          }
          </SubHeaderContainer>
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
}
 
export default Header;