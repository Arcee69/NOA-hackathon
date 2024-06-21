import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

import { api } from "../../../services/api";
import { appUrls } from "../../../services/urls";


const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const getEntriesById = createAsyncThunk(
    "entries/getEntriesById",
    async (values, { rejectWithValue }) => {
      try {
        const data = await api.get(appUrls?.GET_ALL_ENTRIES_BY_ID_URL + `${values}`)
        return data;
      } catch (error) {
        console.log(error, "daoo")
        return rejectWithValue(error?.data?.message);
      }
    }
  );

const getEntriesByIdSlice = createSlice({
    name: "entries",
    initialState,
    extraReducers: builder => {
        builder.addCase(getEntriesById.pending, state => {
            state.loading = true
        });
        builder.addCase(getEntriesById.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload.data,
            state.error = ""
        });
        builder.addCase(getEntriesById.rejected, (state, action) => {
            state.loading = false,
            state.data = "",
            state.error = action.error
        })
    }
});

export default getEntriesByIdSlice.reducer