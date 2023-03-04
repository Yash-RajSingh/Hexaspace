import { useState } from "react";
import { AuthContext, UpdateContext } from "../context/context";
import GlobalStyles from "../globalStyles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import UploadNFTPage from "./UploadNFTPage/UploadNFTPage";
const App = () => {
  const [authState, setAuthState] = useState(false)
  const [update, setUpdate] = useState(false)
  return (
    <>
      <GlobalStyles />
      <UpdateContext.Provider value={{ update, setUpdate }}>
        <AuthContext.Provider value={{ authState, setAuthState }}>
          <Router>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/sell" element={<UploadNFTPage />} />
            </Routes>
          </Router>
        </AuthContext.Provider>
      </UpdateContext.Provider>
    </>
  );
}
 
export default App;