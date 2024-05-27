import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

import { api } from "../../../services/api";
import { appUrls } from "../../../services/urls";


const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const fetchAllParticularContest = createAsyncThunk(
    "particularContest/allParticularContest",
    async (user, { rejectWithValue }) => {
      try {
        const data = await api.get(appUrls?.GET_LIVE_CONTEST_BY_A_PARTICULAR_CREATOR_URL + `/${user?.id}`)
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );


const allParticularContestSlice = createSlice({
    name: "particularContest",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAllParticularContest.pending, state => {
            state.loading = true
        });
        builder.addCase(fetchAllParticularContest.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload.data,
            state.error = ""
        });
        builder.addCase(fetchAllParticularContest.rejected, (state, action) => {
            state.loading = false,
            state.data = "",
            state.error = action.error
        })
    }
});

export default allParticularContestSlice.reducer