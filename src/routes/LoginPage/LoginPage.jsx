import Login from "../../components/login/Login";
import { useEffect } from "react";

const LoginPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
