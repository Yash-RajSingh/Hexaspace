import { BuyButton, NftCardBody, NftCardName, NftPrice, NftPriceContainer } from "./NftCardElements";

const NftCard = ({props}) => {
  const {element, index} = props;
  return (
    <>
      <NftCardBody bg={element.ImageURL} className={"card" + index}>
        <NftCardName>{element.NftName}</NftCardName>
        <NftPriceContainer>
          <NftPrice>
            {element.currentBid}&nbsp;&nbsp;{element.tradeCurrency}{" "}
          </NftPrice>
          <BuyButton color>Buy Now</BuyButton>
        </NftPriceContainer>
      </NftCardBody>
    </>
  );
}
 
export default NftCard;