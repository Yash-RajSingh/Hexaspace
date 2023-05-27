import styled from "styled-components";
import { PartnersTitle } from "../landing/Partners/PartnersElements";

export const ArtistDetailContainer = styled.div`
  /* border: 1px solid white; */
`
export const ArtistInfoContainer = styled.div`
  width: ${(props) => props.width};
  /* border: 2px solid yellow; */
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 7%;
`;
export const ProfileImage = styled.img`
  width: 20%;
  border-radius: 50%;
  margin-left: 3%;
`
export const ArtistInfoContentWrapper = styled.div`
/* border: 1px solid blue; */
`
export const ArtistName = styled.p`
  font-family: 'Tilt Warp';
  color: var(--white);
  font-size: 2rem;
  line-height: 1.5;
`
export const Icon = styled.img`
  width: 2.5rem;
  margin-top: 1%;
`
export const ArtistBio = styled.p`
  font-family: "Poppins";
  color: var(--white);
  font-size: 1.25rem;
  line-height: 1.5;
`;
export const ArtworkCount = styled.p`
  font-family: "Poppins";
  color: var(--white);
  font-size: 1.25rem;
`;
export const ArtistDetailHeading = styled(PartnersTitle)`
  margin-top: 2%;
`
export const ArtistNftWrapper = styled.div`
  width: ${(props) => props.width};
  /* border: 2px solid green; */
  display: flex;
  justify-content: space-evenly;
  gap:3%;
  flex-wrap: wrap;
`;