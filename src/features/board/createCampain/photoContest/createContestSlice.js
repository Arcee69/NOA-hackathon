import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit"
import { toast } from 'react-toastify';

import { api } from "../../../../services/api";
import { appUrls } from "../../../../services/urls"


const initialState = {
    loading: false,
    data: [],
    error: ""
}


export const createContest = createAsyncThunk(
    "contest/createContest", 
    async (formData, { rejectWithValue}) => {
        try {
            const res = await api.post(appUrls?.CREATE_CONTEST_URL, formData)
            console.log(res, "lamba")
            if(res.status === 200) {
                toast("Enter Prizes", {
                  position: "top-right",
                  autoClose: 5000,
                  closeOnClick: true,
                });
            }
            return res;
          } catch (err) {
                toast(`${err?.data?.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    closeOnClick: true,
                })
            return rejectWithValue(err);
          }

})

const createContestSlice = createSlice({
    name: "contest",
    initialState,
    extraReducers: builder => {
        builder.addCase(createContest.pending, state => {
            state.loading = true
        });
        builder.addCase(createContest.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        });
        builder.addCase(createContest.rejected, (state, action) => {
            state.loading = false,
            state.data = [],
            state.error = action.payload
        })
    }
});

export default createContestSlice.reducer