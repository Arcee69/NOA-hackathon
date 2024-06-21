import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

import { api } from "../../../services/api";
import { appUrls } from "../../../services/urls";


const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const allFeedData = createAsyncThunk(
    "feedData/allFeedData",
    async (values, { rejectWithValue }) => {
      try {
        const data = await api.get(appUrls?.GET_ALL_OPEN_CONTEST_URL)
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

const allfeedDataSlice = createSlice({
    name: "feedData",
    initialState,
    extraReducers: builder => {
        builder.addCase(allFeedData.pending, state => {
            state.loading = true
        });
        builder.addCase(allFeedData.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload.data,
            state.error = ""
        });
        builder.addCase(allFeedData.rejected, (state, action) => {
            state.loading = false,
            state.data = "",
            state.error = action.error
        })
    }
});

export default allfeedDataSlice.reducer