import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit"
import { toast } from 'react-toastify';

import { appUrls } from "../../../services/urls"
import { api } from "../../../services/api";


const initialState = {
    loading: false,
    data: [],
    error: ""
}


export const updatePassword = createAsyncThunk(
    "profile/updatePassword", 
    async (values, { rejectWithValue}) => {
        try {
            const res = await api.post(appUrls?.UPDATE_PASSWORD_URL, values)
            console.log(res, "lamba")
            if(res.status === 200) {
                toast("Password Updated successfully", {
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

const updatePasswordSlice = createSlice({
    name: "profile",
    initialState,
    extraReducers: builder => {
        builder.addCase(updatePassword.pending, state => {
            state.loading = true
        });
        builder.addCase(updatePassword.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        });
        builder.addCase(updatePassword.rejected, (state, action) => {
            state.loading = false,
            state.data = [],
            state.error = action.payload
        })
    }
});

export default updatePasswordSlice.reducer