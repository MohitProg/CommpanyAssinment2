import { createSlice } from "@reduxjs/toolkit";
import { GetArticledata } from "./dataApi";

const initialState = {
  articlesdata: [],
  articledatastatus: "idle",
  paginationpagevalue:0,
  searchvalue:'',
};
const dataSlice = createSlice({
  name: "dataofarticle",
  initialState,

  reducers: {
    updatepagevalue: (state, action) => {
      state.paginationpagevalue=action.payload;


    },
    updatedatawithSearch:(state,action)=>{
state.searchvalue=action.payload
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(GetArticledata.pending, (state, action) => {
        state.articledatastatus = "pending";
      })
      .addCase(GetArticledata.fulfilled, (state, action) => {
        console.log(action.payload);
        state.articlesdata = action.payload;
        state.articledatastatus = "fullfilled";
      })
      .addCase(GetArticledata.rejected, (state, action) => {
        state.articledatastatus = "rejected";
      });
  },
});

export default dataSlice.reducer;
export  const {updatepagevalue,updatedatawithSearch}=dataSlice.actions
