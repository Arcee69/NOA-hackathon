import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

import { api } from "../../../services/api";
import { appUrls } from "../../../services/urls";


const initialState = {
    loading: false,
    data: [],
    error: ""
}

export const getProfile = createAsyncThunk(
    "profile/getProfile",
    async (values, { rejectWithValue }) => {
      try {
        const data = await api.get(appUrls?.FETCH_PROFILE_URL)
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

const getProfileSlice = createSlice({
    name: "profile",
    initialState,
    extraReducers: builder => {
        builder.addCase(getProfile.pending, state => {
            state.loading = true
        });
        builder.addCase(getProfile.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload.data,
            state.error = ""
        });
        builder.addCase(getProfile.rejected, (state, action) => {
            state.loading = false,
            state.data = "",
            state.error = action.error
        })
    }
});

export default getProfileSlice.reducer