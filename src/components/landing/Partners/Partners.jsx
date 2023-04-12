import PartnersData from "../../../data/partners.json";
import {
  PartnerContainer,
  PartnerItem,
  PartnerIcon,
  PartnerName,
  PartnersTitle,
} from "./PartnersElements";

const PartnerCard = ({data}) => {
  const {src, name} = data;
  return (
    <>
      <PartnerItem >
        <PartnerIcon src={src} />
        <PartnerName>{name}</PartnerName>
      </PartnerItem>
      ;
    </>
  );
};
const Partners = () => {
  return (
    <>
      <PartnersTitle>Our Partners</PartnersTitle>
      <PartnerContainer>
        {PartnersData.map((element, index) => (
          <PartnerCard data={element} key={"partner"+index}/>
        ))}
      </PartnerContainer>
    </>
  );
};

export default Partners;
