import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

import { api } from "../../../services/api";
import { appUrls } from "../../../services/urls";


const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const fetchAllAdmins = createAsyncThunk(
    "admins/fetchAllAdmins",
    async (values, { rejectWithValue }) => {
      try {
        const data = await api.get(appUrls?.GET_USERS)
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

const getAdminSlice = createSlice({
    name: "admins",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAllAdmins.pending, state => {
            state.loading = true
        });
        builder.addCase(fetchAllAdmins.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload.data,
            state.error = ""
        });
        builder.addCase(fetchAllAdmins.rejected, (state, action) => {
            state.loading = false,
            state.data = "",
            state.error = action.error
        })
    }
});

export default getAdminSlice.reducer