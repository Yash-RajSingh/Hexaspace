import { useState } from "react";
import { useRef } from "react";
import handleNFTUpload from "../../hooks/handleNFTUpload";
import {
  Img,
  NFTUploadForm,
  UploadInputField,
  UploadInputLabel,
  UploadNFTContainer,
  UploadNFTContents,
  UploadFileWrapper,
  UploadNFTWrapper,
  UploadIcon,
  UploadFileInput,
  UploadText,
  CurrencySelect,
  CurrencyOption,
  CurrencyWrapper,
  CurrencySelectWrapper,
  SubmitButton,
  ButtonWrapper,
} from "./UploadNFTElements";
import Draw from "../../assets/draw.png";
import Upload2 from "../../assets/upload2.png";
import { useContext } from "react";
import { AuthContext } from "../../context/context";

const UploadNFT = () => {
  const { authState, setAuthState } = useContext(AuthContext);  
  const FileRef = useRef();
  const FileNameRef = useRef();
  const CurrencyRef = useRef();
  const PriceRef = useRef();
  const [image, setImage] = useState(null);
  const activateBrowseFile = () => {
    FileRef.current.click();
  };
  return (
    <>
      <UploadNFTContainer>
        <UploadNFTWrapper>
          <UploadNFTContents>{/* <Img src={Draw} /> */}</UploadNFTContents>
          <NFTUploadForm>
            <UploadInputLabel>NFT Name</UploadInputLabel>
            <UploadInputField placeholder="Name your NFT" ref={FileNameRef} />
            <UploadFileWrapper>
              <UploadFileInput
                type="file"
                ref={FileRef}
                onChange={(e) => setImage(e.target.files[0])}
              />
              <UploadIcon src={image ? URL.createObjectURL(image) : Upload2} />
              <UploadText onClick={activateBrowseFile}>Browse Files</UploadText>
            </UploadFileWrapper>
            <CurrencyWrapper>
              <CurrencySelectWrapper>
                <UploadInputLabel>Transaction Currency</UploadInputLabel>
                <CurrencySelect ref={CurrencyRef}>
                  <CurrencyOption value={"ETH"}>ETH</CurrencyOption>
                  <CurrencyOption value={"$"}>$ (Dollars)</CurrencyOption>
                  <CurrencyOption value={"BTC"}>BTC</CurrencyOption>
                  <CurrencyOption value={"SOL"}>SOL</CurrencyOption>
                </CurrencySelect>
              </CurrencySelectWrapper>
              <CurrencySelectWrapper>
                <UploadInputLabel>NFT Price</UploadInputLabel>
                <UploadInputField placeholder="Price your NFT" type="number" ref={PriceRef} />
              </CurrencySelectWrapper>
            </CurrencyWrapper>
            <ButtonWrapper>
              <SubmitButton color top={"2%"} size={"50%"} onClick={async(e)=>{

                const request = await handleNFTUpload(
                  FileNameRef.current.value,
                  image,
                  CurrencyRef.current.value,
                  PriceRef.current.value,
                  authState.uid,
                  authState.name
                ).then(()=>{
                  alert("NFT up for sale");
                  FileNameRef.current.value = ''
                  CurrencyRef.current.value=''
                  PriceRef.current.value=''
                  FileRef.current.value=''
                  setImage(null)
                }).catch((err)=>{
                  alert("Error posting NFT",err)
                })
                console.log(request);
              }}>  
                Put for sale
              </SubmitButton>
            </ButtonWrapper>
          </NFTUploadForm>
        </UploadNFTWrapper>
      </UploadNFTContainer>
    </>
  );
};

export default UploadNFT;
