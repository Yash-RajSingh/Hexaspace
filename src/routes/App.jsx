import { useEffect, useState } from "react";
import {
  ArtistsDataContext,
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
import { createCookie, deleteCookie, getCookies } from "../hooks/cookies";
import { auth } from "../firebaseUtils";
import "../firebaseUtils/";

const App = () => {
  const [authState, setAuthState] =
    useState(false) || JSON.parse(getCookies({ name: "authState" }));
  const [update, setUpdate] = useState(false);
  const [nftCollection, setNftCollection] = useState(false);
  const [artistData, setArtistData] = useState(false);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authState) => {
      if (authState) {
        setAuthState(authState);
        createCookie({
          name: "authState",
          value: JSON.stringify(authState),
          validDays: 7,
        });
      } else {
        setAuthState(false);
        deleteCookie({ name: "authState" });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [update]);
  return (
    <>
      <GlobalStyles />
      <UpdateContext.Provider value={{ update, setUpdate }}>
        <AuthContext.Provider value={{ authState, setAuthState }}>
          <NftCollectionContext.Provider
            value={{ nftCollection, setNftCollection }}
          >
            <ArtistsDataContext.Provider value={{ artistData, setArtistData }}>
              <Router>
                <Routes>
                  <Route exact path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/sell" element={<UploadNFTPage />} />
                  <Route path="/explore" element={<ExplorePage />} />
                  <Route path="artists" element={<ExploreArtistsPage />} />
                  <Route
                    path="/artist-detail/:uid"
                    element={<ArtistDetailPage />}
                  />
                </Routes>
              </Router>
            </ArtistsDataContext.Provider>
          </NftCollectionContext.Provider>
        </AuthContext.Provider>
      </UpdateContext.Provider>
    </>
  );
};

export default App;
