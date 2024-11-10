import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { updatedatawithSearch } from "../Redux/dataSlice";
const Navbar = () => {
  const dispatch=useDispatch()
  const [search,setsearch]=useState("");
  const username=localStorage.getItem("name")

  useEffect(()=>{
dispatch(updatedatawithSearch(search))
  },[search])
  return (
    <>
      <header className="w-full">
        <nav className=" h-[6vh] sm:h-[7vh]  p-2 bg-orange-500 gap-8 flex  ">
          <div className="flex sm:w-1/5 gap-2 items-center">
            <img
             
              className=" sm:w-[50px] w-10 sm:h-[50px] "
              src="https://hn.algolia.com/public/899d76bbc312122ee66aaaff7f933d13.png"
              alt=""
            />
            <div className="sm:flex flex-col justify-end hidden   leading-[1] sm:text-lg ">
              {username}
            </div>
          </div>

          {/* search box */}

          <div className="sm:w-4/5 w-full flex items-center px-3 bg-white justify-between  gap-2 ">
            <SearchIcon fontSize="large" className="text-orange-500" />
            <input
              type="text"
              onChange={(e)=>setsearch(e.target.value)}
              placeholder="Search Stories  by title,url or author"
              className=" w-full sm:flex-1 sm:py-1 outline-none text-lg placeholder:text-gray-500 "
            />
            <div className="flex items-center gap-2 ">
              <span className="hidden sm:block">Search by </span>
              <img
                className="h-20 w-20"
                src="https://hn.algolia.com/public/38a9c67b12016b52267071c530ff2e78.svg"
                alt=""
              />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
