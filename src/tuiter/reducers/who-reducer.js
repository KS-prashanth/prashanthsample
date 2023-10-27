import { createSlice } from "@reduxjs/toolkit";
import followData from "../data/who.json";

const whoSlice = createSlice({
    name: "who",
    initialState: followData
});

export default whoSlice.reducer;