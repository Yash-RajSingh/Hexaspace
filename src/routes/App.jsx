import { useState } from "react";
import {
  AuthContext,
  NftCollectionContext,
  UpdateContext,
} from "../context/context";
import GlobalStyles from "../globalStyles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import UploadNFTPage from "./UploadNFTPage/UploadNFTPage";
import "swiper/swiper.css";
import ExplorePage from "./ExplorePage/ExplorePage";
import ArtistDetailPage from "./ArtistDetailPage/ArtistDetailPage";
import ExploreArtistsPage from "./ExploreArtistsPage/ExploreArtistsPage";
const App = () => {
  const [authState, setAuthState] = useState(false);
  const [update, setUpdate] = useState(false);
  const [nftCollection, setNftCollection] = useState(false);
  return (
    <>
      <GlobalStyles />
      <UpdateContext.Provider value={{ update, setUpdate }}>
        <AuthContext.Provider value={{ authState, setAuthState }}>
          <NftCollectionContext.Provider value={{ nftCollection, setNftCollection }}>
            <Router>
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sell" element={<UploadNFTPage />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="artists" element={<ExploreArtistsPage />}/>
                <Route path="/artist-detail/:uid" element={<ArtistDetailPage />} />
              </Routes>
            </Router>
          </NftCollectionContext.Provider>
        </AuthContext.Provider>
      </UpdateContext.Provider>
    </>
  );
};

export default App;
