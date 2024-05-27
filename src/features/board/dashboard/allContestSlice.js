import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

import { api } from "../../../services/api";
import { appUrls } from "../../../services/urls";


const initialState = {
    loading: false,
    data: [],
    error: ""
}

export const fetchAllContest = createAsyncThunk(
    "allContest/fetchAllContest",
    async (user, { rejectWithValue }) => {
      try {
        const data = await api.get(appUrls?.GET_NUMBER_OF_ALL_LIVE_CONTEST_BY_A_PARTICULAR_CREATOR_URL + `/${user?.id}`)
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

const allContestSlice = createSlice({
    name: "allContest",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAllContest.pending, state => {
            state.loading = true
        });
        builder.addCase(fetchAllContest.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload.data,
            state.error = ""
        });
        builder.addCase(fetchAllContest.rejected, (state, action) => {
            state.loading = false,
            state.data = "",
            state.error = action.error
        })
    }
});

export default allContestSlice.reducer