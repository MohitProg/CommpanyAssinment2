import { Password } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const Navigate=useNavigate()
    // state for user data 

    const [userdata,setuserdata]=useState({
        name:"",
        password:""
    })
    const HandleSubmit=(e)=>{
        e.preventDefault();

        if(userdata?.name.length>0 && userdata?.password?.length>0){
            localStorage.setItem("name",userdata?.name)
            localStorage.setItem("password",userdata?.password)
            Navigate("/")

        }
    }


  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center p-4 bg-black">
        <div className=" w-full sm:w-2/3  lg:w-1/3 flex flex-col gap-2 p-3 transition-transform duration-300 ease-in-out hover:scale-105 bg-orange-500 rounded-md shadow-sm">
          <h1 className="text-3xl text-center font-semibold text-white ">
            Login Here
          </h1>
          <form action="" onSubmit={HandleSubmit} className="flex flex-col gap-3  text-lg">
            <label className="text-gray-300 font-semibold" htmlFor="name">
              UserName
            </label>
            <input
              className="p-2 rounded-md outline-none hover:ring-1 hover:ring-orange-600 "
              type="text"
              placeholder="Enter the username"
              required
              value={userdata?.name}
              onChange={(e)=>setuserdata({...userdata,name:e.target.value})}
              name="name"
              id="name"
            />
            <label className="text-gray-300 font-semibold" htmlFor="password">
              Password
            </label>
            <input
              type="text"
              className="p-2 rounded-md outline-none hover:ring-1 hover:ring-orange-600 "
              placeholder="Enter the username"
              required
              value={userdata?.password}
              onChange={(e)=>setuserdata({...userdata,password:e.target.value})}
              name="password"
              id="password"
            />

            <button className="bg-white p-2 w-1/3 mt-3 hover:text-black  hover:bg-orange-600 transition-colors duration-200 ease-in-out rounded-md text-lg font-semibold hover:shadow-md " >Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
