import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner"

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
  };
  useEffect(() => {
    const authCheck = async () => {
      try{
        const res = await axios.get("https://api-nhaxinh.onrender.com/api/user/info-user");
        if (res.data.status == "success") {
          setOk(true);
        } else {
          setOk(false);
          handleLogout();
        }
      }catch (error){
        handleLogout();
      }      
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
}