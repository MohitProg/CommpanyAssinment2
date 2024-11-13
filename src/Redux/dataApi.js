import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

// Api get data acording to filter
export const GetArticledata = createAsyncThunk("artcledata", async (tags) => {
  try {
    const { drop1, drop2, timevalue, paginationpagevalue, searchvalue } = tags;
 console.log(timevalue)
    // time set format

    // tag value
    const tagvalue = drop1 == "All" ? `` : `tags=${drop1}`;
    // searching process
    const searchwithdate = drop2 === "Date" ? `search_by_date` : "search";

    const res = await axios.get(
      `https://hn.algolia.com/api/v1/${searchwithdate}?${tagvalue}&numericFilters=${timevalue}`,

      {
        params: {
          page: paginationpagevalue,
          query: searchvalue,
        },
      }
    );

    if (drop2 === "Popularity") {
      const data = res.data.hits;
      return data.sort((b, a) => a?.points - b?.points);
    } else {
      return res.data.hits;
    }
  } catch (error) {
    console.log(error);
  }
});

// api to get data according to search
