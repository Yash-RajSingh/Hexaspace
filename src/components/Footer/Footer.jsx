import {
  FooterContainer,
  FooterWrapper,
  FooterLogo,
  FooterHeaderWrapper,
  FooterTitle,
  FooterHeader,
  Input,
  FooterHeaderContainer,
  FooterBottom,
  FooterSubBottom,
  Description,
  Copyright,
} from "./FooterElements";
import { Button } from "../common/common";
import Logo from "../../assets/logo.webp";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterHeaderContainer>
            <FooterHeaderWrapper>
              <FooterLogo src={Logo} />
              <FooterTitle>HexaSpace</FooterTitle>
            </FooterHeaderWrapper>
            <FooterHeaderWrapper>
              <FooterHeader>Subscribe to the newsletter</FooterHeader>
              <Input placeholder={"Your email address"} size={"40%"} />
              <Button color size={"7rem"}>
                Send
              </Button>
            </FooterHeaderWrapper>
          </FooterHeaderContainer>
          <FooterBottom>
            <FooterSubBottom>
              <FooterHeader>About us</FooterHeader>
              <Description>
                Unleash the power of digital ownership. Join our NFT marketplace
                to discover, collect, and trade authenticated NFTs.
              </Description>
            </FooterSubBottom>
            <FooterSubBottom style={{ width: "20%" }}>
              <FooterHeader>Resources</FooterHeader>
              <Description className={"hover"}>Help center</Description>
              <Description className={"hover"}>Blog</Description>
            </FooterSubBottom>
            <FooterSubBottom style={{ width: "20%" }}>
              <FooterHeader>Company</FooterHeader>
              <Description className={"hover"}>About us</Description>
              <Description className={"hover"}>Careers</Description>
            </FooterSubBottom>
          </FooterBottom>
          <Copyright>
            Copyrights 2023 • HexaSpace
          </Copyright>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
};

export default Footer;
