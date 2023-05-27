import styled from "styled-components";
import ProfileLogo from "../../../assets/profile.webp";
import { Button } from "../../common/common";
import { useNavigate } from "react-router-dom";
const ArtistCardBody = styled.div`
  width: 14rem;
  border-radius: 1rem;
  /* border: 1px solid blue; */
  backdrop-filter: blur(100px);
  background: #0000007a;
  padding: 1.5rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const ProfileImage = styled.img`
  width: 3rem;
  border-radius: 50%;
`;
const ArtworkCount = styled.p`
  background: linear-gradient(var(--light-orange), var(--dark-orange));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font: 900 1.25rem "Joan";
  margin-top: 5%;
`;
const ArtistName = styled.p`
  color: var(--white);
  font: 1.5rem "Tilt Warp";
  margin-top: 5%;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
`;
const SeeMoreButton = styled(Button)`
  border-radius: 1rem;
  font-size: 1rem;
  margin-top: 10%;
`;
const ArtistCard = ({ data }) => {
  const { profilePhoto, artworkCount, docId, name, uid } = data;
  let navigate = useNavigate()
  console.log("artistData", data)
  return (
    <>
      <ArtistCardBody>
        <div style={{textAlign:"center"}}>
        <ProfileImage src={profilePhoto || ProfileLogo} />
          <ArtistName>{name}</ArtistName>
          <ArtworkCount>
            {artworkCount} {"+ Artworks"}
          </ArtworkCount>
        </div>
        <SeeMoreButton color size={"90%"} onClick={()=>{
          navigate(`/artist-detail/${uid}`);
        }}>
          See artworks
        </SeeMoreButton>
      </ArtistCardBody>
    </>
  );
};

export default ArtistCard;
