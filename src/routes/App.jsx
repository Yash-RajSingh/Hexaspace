import { useState } from "react";
import { AuthContext } from "../context/context";
import GlobalStyles from "../globalStyles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
const App = () => {
  const [auth, setAuth] = useState(false)
  return ( 
    <>
    <GlobalStyles />
    <AuthContext.Provider value={{auth, setAuth}} >
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/login" element={ <LoginPage />} />
      </Routes>
    </Router>
    </AuthContext.Provider>
    </>
   );
}
 
export default App;