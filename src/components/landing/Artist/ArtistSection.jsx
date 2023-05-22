import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import getAllArtists from "../../../hooks/getAllArtists";
import { PartnersTitle } from "../Partners/PartnersElements";
import ArtistCard from "./ArtistCard";
import { ArtistsDataContext, UpdateContext } from "../../../context/context";
import { useNavigate } from "react-router-dom";

const ArtistContainer = styled.div`
  /* border: 1px solid white; */
  margin-top: 10%;
  padding: 0 2rem 2rem;
`
const ArtistHeading = styled(PartnersTitle)`
  margin-top: 0;
`
const ArtistWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5%;
  margin-top: 3%;
`
const ExploreButton = styled.div`
 background: transparent;
  font-size: 1.5rem;
  color: var(--white);
  border: 1px solid white;
  padding: 0.7rem 3rem;
  border-radius: 1rem;
  margin: 5% auto 0;
  font-family: "Joan";
  font-weight: 600;
  letter-spacing: 2px;
  transition: all 500ms;
  text-align: center;
  width: max-content;
  cursor: pointer;
  &:hover {
    background: var(--light-orange);
  }
`
const ArtistSection = () => {
  const { artistData, setArtistData } = useContext(ArtistsDataContext);
  const {update, setUpdate} = useContext(UpdateContext)
  const navigate = useNavigate();
  useEffect(()=>{
    (async () => {
      const Data = await getAllArtists();
      const ArtistData = Data.filter((item) =>{
        return item.isArtist === true
      })
      setArtistData(ArtistData)
    })();
  },[update])
  return ( 
    <>
    <ArtistContainer>
      <ArtistHeading>Top Artists</ArtistHeading>
      <ArtistWrapper>
        {artistData && artistData.slice(0,4).map((element, index)=> <ArtistCard data={element} key={"artist"+index}/>)}
      </ArtistWrapper>
      <ExploreButton onClick={(e)=>{
        navigate('/artists')
      }}>Explore</ExploreButton>
    </ArtistContainer>
    </>
   );
}
 
export default ArtistSection;