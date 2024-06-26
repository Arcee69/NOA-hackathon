import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

import { api } from "../../../services/api";
import { appUrls } from "../../../services/urls";


const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const fetchAnalytics = createAsyncThunk(
    "analytics/fetchAnalytics",
    async (values, { rejectWithValue }) => {
      try {
        const data = await api.get(appUrls?.GET_ANALYTICS + `?secret_key=${values}`)
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

const getAnalyticsSlice = createSlice({
    name: "analytics",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAnalytics.pending, state => {
            state.loading = true
        });
        builder.addCase(fetchAnalytics.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload.data,
            state.error = ""
        });
        builder.addCase(fetchAnalytics.rejected, (state, action) => {
            state.loading = false,
            state.data = "",
            state.error = action.error
        })
    }
});

export default getAnalyticsSlice.reducer