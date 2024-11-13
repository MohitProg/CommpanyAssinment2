import React, { useEffect, useState } from "react";
import Filter from "../Components/Filter";
import Navbar from "../Components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import StoryUi from "../Components/StoryUi";

import { Pagination } from "@mui/material";
import { updatepagevalue } from "../Redux/dataSlice";
import Footer from "../Components/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const { articlesdata, paginationpagevalue,articledatastatus } = useSelector(
    (state) => state.article
  );
  // state for page value
  const [pagevalue, setpagevalue] = useState(0);

  useEffect(() => {
    dispatch(updatepagevalue(pagevalue));
  }, [pagevalue]);

  return (
    <>
      <div className=" lg:w-5/6  w-full  bg-white  sm:mx-auto min-h-screen">
        {/* navbar  */}
        <Navbar />
        {/* filter section  */}
        <Filter />

        {/* section1 ui for story  */}
        <div className="min-h-screen">
          {articlesdata && articlesdata?.length > 0 ? (
            articlesdata.map((value) => <StoryUi value={value} />)
          ): articledatastatus==='pending' ?(
            <>
              <div className="text-center p-3 font-semibold text-lg ">
                <h1>Please wait </h1>
              </div>
            </>
          ):<div className="text-center p-3 font-semibold text-lg ">
          <h1>No data is available </h1>
        </div>}
        </div>
        <div className="flex w-full  items-center justify-center">
          <Pagination
            count={35}
            color="red"
            page={pagevalue}
            onChange={(e, value) => setpagevalue(value)}
            variant="outlined"
            shape="rounded"
          />
        </div>

        {/* footer section  */}

        <Footer />
      </div>
    </>
  );
};

export default Home;
