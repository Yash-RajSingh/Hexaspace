import styled from "styled-components";
import NFT from "../../assets/NFT.webp";
// import NFT from "../../assets/NFT2.jpg";

export const LoginContainer = styled.div`
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(1px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoginViewWindow = styled.div`
  height: 100%;
  /* border: 4px solid blue; */
  overflow: hidden;
`;
export const LoginPseudobody = styled.div`
  width: 87%;
  display: flex;
  height: 90%;
  /* border: 4px solid yellow; */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.664);
`;
export const LoginImageContainer = styled.div`
  width: 50%;
  /* border: 4px solid pink; */
  background-image: url(${NFT});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const LoginWrapper = styled.div`
  /* border: 1px solid yellow; */
  background: linear-gradient(
      221deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(66, 15, 0, 1) 52%,
      rgba(0, 0, 0, 1) 200%
    )
    fixed;

  width: 50%;
  backdrop-filter: blur(500px);
  padding: 1rem 3rem;
`;
export const SubLoginWrapper = styled.div`
  width: 90%;
  /* border: 1px solid white; */
  height: 100%;
  margin: auto;
`;
export const LoginHeading = styled.p`
  color: var(--white);
  font-family: "Anton";
  font-size: 1.25rem;
  /* float: right; */
  /* margin-left: auto; */
  position: absolute;
  top: 1.5%;
  right: 6%;
  z-index: 2;
  letter-spacing: 1px;
`;

export const LoginTitle = styled.p`
  text-align: center;
  color: var(--white);
  font-family: "Joan";
  font-size: 1.5rem;
  margin-top: 1%;
  margin-bottom: 1%;
`;
export const BtnIcon = styled.img`
  width: 1rem;
`;
export const GoogleBtn = styled.button`
  margin: 2% auto;
  padding: 0.5rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 5px;
  background: rgba(122, 54, 33, 0.5);
  border: 0.5px solid #ffffff6a;
  backdrop-filter: blur(50px);
  color: var(--white);
  font-family: "Joan";
  outline: none;
  cursor: pointer;
  line-height: 1.5rem;
  letter-spacing: 1px;
  font-size: 1.125rem;
  /* font-weight: 00; */
`;

export const SeparatorWrapper = styled.div`
  width: 100%;
  /* border: 1px solid white; */
  display: flex;
  align-items: center;
  gap: 2%;
  margin: 5% 0;
`;
export const SeparatorText = styled.p`
  color: var(--white);
`;
export const SeparatorLine = styled.p`
  flex-grow: 1;
  border: 0.5px solid #ffffffaf;
`;

export const InputField = styled.input`
  width: 100%;
  background: rgba(122, 54, 33, 0.5);
  border: 0.5px solid #ffffff6a;
  backdrop-filter: blur(50px);
  line-height: 1.5;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  color: var(--white);
  border-radius: 0.24rem;
  margin: 2% 0 5%;
`;

export const InputLabel = styled.label`
  color: var(--white);
  font-family: "Joan";
  font-size: 1.25rem;
  letter-spacing: 1px;
`;
export const ClickableText = styled.span`
  cursor: pointer;
  /* text-decoration: underline; */
  color: var(--dark-orange);
  transition: all 3s;
  padding-bottom: 0.25rem;
  &:hover {
    border-bottom: 0.25px solid var(--dark-orange);
  }
`;

export const BackButton = styled.img`
  background: var(--dark-orange);
  width: 2.5rem;
  border-radius: 50%;
  position: absolute;
  top: 2%;
  left: 2%;
  transform: rotate(-0.25turn);
  cursor: pointer;
  /* border: 1px solid black; */
`;
