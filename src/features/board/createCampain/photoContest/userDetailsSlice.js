import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit"
import { toast } from 'react-toastify';

import { api } from "../../../../services/api";
import { appUrls } from "../../../../services/urls"


const initialState = {
    loading: false,
    data: [],
    error: ""
}


export const userDetails = createAsyncThunk(
    "userDetails/createUserDetails", 
    async (data, { rejectWithValue}) => {
        try {
            const res = await api.post(appUrls?.CREATE_USER_DETAILS_URL, data)
            // console.log(res, "lamba")
            if(res.status === 200) {
                toast("Proceed to the next section", {
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

const userDetailsSlice = createSlice({
    name: "userDetails",
    initialState,
    extraReducers: builder => {
        builder.addCase(userDetails.pending, state => {
            state.loading = true
        });
        builder.addCase(userDetails.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        });
        builder.addCase(userDetails.rejected, (state, action) => {
            state.loading = false,
            state.data = [],
            state.error = action.payload
        })
    }
});

export default userDetailsSlice.reducer
