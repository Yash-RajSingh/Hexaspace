import { useContext } from "react";
import { ArtistsDataContext } from "../../../context/context";
import ArtistCard from "./ArtistCard";
import styled from "styled-components";
import { PartnersTitle } from "../Partners/PartnersElements";

const ExploreArtistWrapper = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  justify-content: center;
  gap: 5%;
  margin-top: 2%;
`;
const ExploreArtistTitle = styled(PartnersTitle)`
  text-align: left;
  margin-top: 3%;
  /* margin-left: 3%; */
`
const ExploreArtists = () => {
  const { artistData, setArtistData } = useContext(ArtistsDataContext);
  return (
    <>
      <ExploreArtistTitle>HexaSpace's talented artists</ExploreArtistTitle>
      <ExploreArtistWrapper>
        {console.log(artistData)}
        {artistData &&
          artistData.map((element, index) => (
            <ArtistCard data={element} key={"artist" + index} />
          ))}
      </ExploreArtistWrapper>
    </>
  );
};

export default ExploreArtists;
