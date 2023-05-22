import styled from "styled-components";
import { InputField, InputLabel } from "../login/LoginElements";
import NFT from "../../assets/NFT4.webp";
import { Button } from "../common/common";

export const UploadNFTContainer = styled.div`
  /* border: 1px solid white; */
  /* box-shadow: 0 2px 30px rgba(255, 255, 255, 0.498); */
  margin-top: 2%;
`;
export const UploadNFTWrapper = styled.div`
  display: flex;
`;
export const UploadNFTContents = styled.div`
  width: 50%;
  /* border: 1px solid green; */
  background: url(${NFT});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;
export const NFTUploadForm = styled.div`
  /* border: 1px solid pink; */
  width: 50%;
  background: linear-gradient(
      221deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(66, 15, 0, 1) 52%,
      rgba(0, 0, 0, 1) 200%
    )
    fixed;

  backdrop-filter: blur(50px);
  padding: 2rem 3rem 2rem;
  /* box-shadow: 0 2px 30px rgba(255, 255, 255, 0.498); */
`;

export const Img = styled.img`
  width: 100%;
`;

export const UploadInputField = styled(InputField)`
  width: ${(props) => props.width};
  margin: 2% 0;
  &:focus {
    outline: none;
    border: 0.5px solid white;
  }
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none !important;
    margin: 0 !important;
    -moz-appearance: textfield !important;
  }
`;
export const UploadInputLabel = styled.p`
  color: var(--white);
  font-family: "Joan";
  font-size: 1.25rem;
  letter-spacing: 1px;
`;

export const UploadFileWrapper = styled.div`
  margin: 2% auto 0;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  background: rgba(176, 176, 176, 0.55);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8.8px);
  -webkit-backdrop-filter: blur(8.8px);
  border: 1px dashed rgba(176, 176, 176, 0.997);
`;

export const UploadFileInput = styled.input`
  width: 1px;
  opacity: 0;
  height: 1px;
`;
export const UploadIcon = styled.img`
  width: 5rem;
  opacity: 0.8;
`;
export const UploadText = styled.p`
  font-size: 1.5rem;
  line-height: 1.2;
  font-family: "Joan";
  width: max-content;
  margin: 5% auto 0;
  border: 2px solid black;
  font-weight: 600;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  letter-spacing: 1px;
  &:hover {
    background: black;
    color: var(--white);
  }
`;
export const CurrencyWrapper = styled.div`
  /* border:1px solid white; */
  margin-top: 3%;
  display: flex;
  /* align-items: center; */
  gap: 3%;
  padding: 0.5rem 0;
`;
export const CurrencySelectWrapper = styled.div`
  width: 50%;
`;
export const CurrencySelect = styled.select`
  font-family: "Joan";
  letter-spacing: 1px;
  backdrop-filter: blur(50px);
  background: rgba(122, 54, 33, 0.5);
  border: 0.5px solid #ffffff6a;
  color: var(--white);
  outline: none;
  line-height: 1.5;
  padding: 0.5rem 1rem;
  margin-top: 2%;
  font-size: 1.25rem;
  width: 100%;
`;
export const CurrencyOption = styled.option`
  line-height: 1.5;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  font-family: "Joan";
  letter-spacing: 1px;
  color: var(--white);
  background: rgba(66, 15, 0, 1);
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  /* border: 1px solid grey; */
`;
export const SubmitButton = styled(Button)``;
