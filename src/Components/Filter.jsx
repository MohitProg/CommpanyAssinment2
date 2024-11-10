import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { GetArticledata } from "../Redux/dataApi";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch();
  const { paginationpagevalue, searchvalue } = useSelector(
    (state) => state.article
  );

  console.log(paginationpagevalue, searchvalue);
  // state for  drop 1
  const [drop1, setdrop1] = useState("All");
  const [drop2, setdrop2] = useState("Popularity");
  const [drop3, setdrop3] = useState("All time");
  const [timevalue, settimevalue] = useState("created_at_i>=0");
  const HandleChange = (e, cat) => {
    if (cat == "drop1") {
      setdrop1(e.target.value);
    } else if (cat == "drop2") {
      setdrop2(e.target.value);
    } else if (cat == "drop3") {
      setdrop3(e.target.value);
    }
  };

  // useEffect to get data according to filter value
  useEffect(() => {
    let time;
    let currentTime = Math.floor(Date.now() / 1000);
    if (drop3 === "All times") {
      settimevalue(`created_at_i>=0`);
    } else if (drop3 === "Last 24h") {
      const last24Hours = currentTime - 24 * 60 * 60;

      settimevalue(`created_at_i>${last24Hours}`);
    } else if (drop3 === "Past Week") {
      const lastWeek = currentTime - 7 * 24 * 60 * 60;
      console.log(lastWeek);
      settimevalue(`created_at_i>${lastWeek}`);
    } else if (drop3 === "Past Month") {
      const lastMonth = currentTime - 30 * 24 * 60 * 60;

      settimevalue(`created_at_i>${lastMonth}`);
    } else if (drop3 === "Past Year") {
      const lastYear = currentTime - 365 * 24 * 60 * 60;
      settimevalue(`created_at_i>${lastYear}`);
    }

    dispatch(
      GetArticledata({
        drop1,
        drop2,
        timevalue,
        paginationpagevalue,
        searchvalue,
      })
    );
  }, [drop1, drop2, drop3, timevalue, paginationpagevalue, searchvalue]);
  return (
    <div className=" flex justify-between p-2">
      {/* filter box  */}

      <div className="py-1 flex flex-wrap items-center gap-2">
        <span className="text-sm text-gray-600">Search</span>

        {/* drop down one to select  */}
        <FormControl className="p-0">
          <Select
            size="small"
            className="outline-none focus:outline-none focus:ring-0"
            sx={{ minWidth: 20 }}
            value={drop1}
            onChange={(e) => HandleChange(e, "drop1")}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"story"}>Stories</MenuItem>
            <MenuItem value={"comment"}>Comments</MenuItem>
            <MenuItem value={"ask_hn"}>Ask HN</MenuItem>
            <MenuItem value={"show_hn"}>Show HN</MenuItem>
            <MenuItem value={"launch_hn"}>Launch HN</MenuItem>
            <MenuItem value={"job"}>Jobs </MenuItem>
            <MenuItem value={"poll"}>Polls</MenuItem>
          </Select>
        </FormControl>

        <span className="text-sm text-gray-600">by</span>
        {/* drop doiwn 2 */}
        <FormControl className="p-0">
          <Select
            size="small"
            className="outline-none focus:outline-none focus:ring-0"
            sx={{ minWidth: 20 }}
            value={drop2}
            onChange={(e) => HandleChange(e, "drop2")}
          >
            <MenuItem value={"Popularity"}>Popularity</MenuItem>
            <MenuItem value={"Date"}>Date</MenuItem>
          </Select>
        </FormControl>

        <span className="text-sm text-gray-600">for</span>
        <FormControl className="p-0">
          <Select
            size="small"
            className="outline-none focus:outline-none focus:ring-0"
            sx={{ minWidth: 20 }}
            value={drop3}
            onChange={(e) => HandleChange(e, "drop3")}
          >
            <MenuItem value={"All time"}>All times</MenuItem>
            <MenuItem value={"Last 24h"}>Last 24h</MenuItem>
            <MenuItem value={"Past Week"}>Past Week</MenuItem>
            <MenuItem value={"Past Month"}>Past Month</MenuItem>
            <MenuItem value={"Past Year"}>Past Year</MenuItem>
            <MenuItem value={"Custom range"}>Custom range</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="sm:flex items-center hidden">
        <span className="text-sm text-gray-900">
          3,46,6778 results (0.0002 seconds)
        </span>
      </div>
    </div>
  );
};

export default Filter;
