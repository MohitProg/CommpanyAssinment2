import React, { useEffect } from "react";
import {  useNavigate } from "react-router-dom";

const Auth = ({ children }) => {
    const Navigate=useNavigate()
  const name = localStorage.getItem("name");
  console.log(name);
  if (name?.length > 0) {
    return children;
  }else{
useEffect(()=>{
Navigate("/login")
},[])
  }

};

export default Auth;
