import { useParams } from "react-router-dom";
import { useEffect } from "react";
import getNFTsByArtist from "../../hooks/getNFTsByArtist";
import { useState } from "react";
import {
  ArtistDetailContainer,
  ArtistDetailHeading,
  ArtistInfoContainer,
  ArtistNftWrapper,
  ArtistInfoContentWrapper,
  ProfileImage,
  ArtistName,
  Icon,
  ArtworkCount,
  ArtistBio,
} from "./ArtistDetailElements";
import getArtistDetail from "../../hooks/getArtistDetail";
import NftCard from "../ExploreNFT/NftCards/NftCard";
import EmailIcon from '../../assets/emailIcon2.png'
import ProfilePhoto from '../../assets/profile.webp'
const ArtistDetail = () => {
  const { uid } = useParams();
  const [artistNFTs, setArtistNFTs] = useState(false);
  const [artistDetail, setArtistDetail] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    (async () => {
      const request = await getNFTsByArtist(uid);
      const response = await request;
      if (response?.status === 200) {
        setArtistNFTs(response.artistNFTs);
      }
    })();
    (async () => {
      const request = await getArtistDetail(uid);
      const response = await request;
      setArtistDetail(response.userData);
      console.log(artistDetail);
    })();
  }, []);
  return (
    <>
      <ArtistDetailContainer>
        <ArtistInfoContainer width={openModal ? "60%" : "100%"}>
          <ProfileImage src={artistDetail.profilePhoto || ProfilePhoto} />
          <ArtistInfoContentWrapper>
            <ArtistName>{artistDetail.name}</ArtistName>
            <ArtistBio>{artistDetail?.bio}</ArtistBio>
            <Icon
              src={EmailIcon}
              onClick={() => (window.location = `mailto:${artistDetail.email}`)}
            />
            <ArtworkCount>{artistDetail.artworkCount}+ artworks</ArtworkCount>
          </ArtistInfoContentWrapper>
        </ArtistInfoContainer>
        <ArtistDetailHeading>
          {artistDetail.name}'s Artworks
        </ArtistDetailHeading>
        <ArtistNftWrapper width={openModal ? "60%" : "100%"}>
          {artistNFTs &&
            artistNFTs.map((element, index) => (
              <NftCard props={{ element }} key={`NFTcardNo ` + index} />
            ))}
        </ArtistNftWrapper>
      </ArtistDetailContainer>
    </>
  );
};

export default ArtistDetail;
