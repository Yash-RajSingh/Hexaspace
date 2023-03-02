import { useState } from "react";
import { AuthContext, UpdateContext } from "../context/context";
import GlobalStyles from "../globalStyles/GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
const App = () => {
  const [auth, setAuth] = useState(false)
  const [update, setUpdate] = useState(false)
  return ( 
    <>
    <GlobalStyles />
    <UpdateContext.Provider value={{update, setUpdate}}>
    <AuthContext.Provider value={{auth, setAuth}} >
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path="/login" element={ <LoginPage />} />
      </Routes>
    </Router>
    </AuthContext.Provider>
    </UpdateContext.Provider>
    </>
   );
}
 
export default App;