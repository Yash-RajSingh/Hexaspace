import styled from "styled-components";
import DiscorrdLogo from '../../assets/discordIcon.webp'
import { Button } from "../common/common";
const CommunityContainer = styled.div`
  /* border: 1px solid white; */
  display: flex;
  justify-content: space-evenly;
  gap: 10%;
  margin-top: 10%;
`
const CommunitySubWrapper = styled.div`
  /* border: 1px solid yellow; */
  background-color: var(--light-orange);
  width: 30%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 2rem;
`
const Discord = styled.img`
  width: 60%;
  margin: auto;
`
const CommunityInfoWrapper = styled.div`
  width: 30%;
  /* border: 1px solid white; */
`;
const Title = styled.p`
  font-size: 1.5rem;
  color: var(--white);
  font-family: 'Tilt Warp';
`
const Description = styled.p`
  font-family: "Joan";
  letter-spacing: 1px;
  color: var(--white);
  line-height: 1.5;
  font-size: 1.25rem;
  margin-top: 5%;
`;
const Community = () => {
  return (
    <>
      <CommunityContainer>
        <CommunitySubWrapper>
          <Discord src={DiscorrdLogo} />
        </CommunitySubWrapper>
        <CommunityInfoWrapper>
          <Title>Join our community</Title>
          <Description>
            Meet the artists and collectors for platform updates, announcements,
            and more...
          </Description>
          <Button
            color
            top={"10%"}
            size={"70%"}
            style={{ borderRadius: "15px" }}
            onClick={() => window.open("https://discord.gg/mAECwQ6qBq")}
          >
            Join Discord
          </Button>
        </CommunityInfoWrapper>
      </CommunityContainer>
    </>
  );
}
 
export default Community;