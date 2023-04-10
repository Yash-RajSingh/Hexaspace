import PartnersData from "../../../data/partners.json";
import {
  PartnerContainer,
  PartnerItem,
  PartnerIcon,
  PartnerName,
  PartnersTitle,
} from "./PartnersElements";

const Partners = () => {
  return (
    <>
      <PartnersTitle>Our Partners</PartnersTitle>
      <PartnerContainer>
        {PartnersData.map((item, index) => {
          return (
            <>
              <PartnerItem key={"partner"+index}>
                <PartnerIcon src={item.src} />
                <PartnerName>{item.name}</PartnerName>
              </PartnerItem>
            </>
          );
        })}
      </PartnerContainer>
    </>
  );
};

export default Partners;
