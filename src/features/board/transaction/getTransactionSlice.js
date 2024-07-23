import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

import { api } from "../../../services/api";
import { appUrls } from "../../../services/urls";


const initialState = {
    loading: false,
    data: [],
    error: ""
};

export const fetchAllTransactions = createAsyncThunk(
    "transactions/fetchAllTransactions",
    async (values, { rejectWithValue }) => {
      try {
        const data = await api.get(appUrls?.GET_ALL_TRANSACTIONS_URL)
        return data;
      } catch (error) {
        return rejectWithValue(error);
      }
    }
  );

const getTransactionsSlice = createSlice({
    name: "transactions",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchAllTransactions.pending, state => {
            state.loading = true
        });
        builder.addCase(fetchAllTransactions.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload.data,
            state.error = ""
        });
        builder.addCase(fetchAllTransactions.rejected, (state, action) => {
            state.loading = false,
            state.data = "",
            state.error = action.error
        })
    }
});

export default getTransactionsSlice.reducer