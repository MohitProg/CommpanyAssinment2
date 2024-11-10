import { configureStore } from "@reduxjs/toolkit";
import ArticleReducer from "./dataSlice"

export const store=configureStore({
    reducer:{
        article:ArticleReducer
    }
})