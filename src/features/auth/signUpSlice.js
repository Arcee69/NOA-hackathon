import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit"
import { toast } from 'react-toastify';

import { api } from "../../services/api"
import { appUrls } from "../../services/urls"

const initialState = {
    loading: false,
    data: [],
    error: ""
};


export const signUpUser = createAsyncThunk(
    "user/signUpUser", 
    async (data, { rejectWithValue }) => {
        try {
            const res = await api.post(appUrls?.SIGNUP_URL, data);
            // console.log(res, "popore" )
            if (res?.status === 200) { 
              toast(`${res?.data?.Message}` , {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
                })
            }
          } catch (error) {
            toast(`${error?.data?.message}` , {
              position: "top-right",
              autoClose: 5000,
              closeOnClick: true,
          })
          return rejectWithValue(error.data.message)
        }
})


const signUpSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: builder => {
        builder.addCase(signUpUser.pending, state => {
            state.loading = true
        });
        builder.addCase(signUpUser.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.meta.arg,
            state.error = ""
        });
        builder.addCase(signUpUser.rejected, (state, action) => {
            state.loading = false,
            state.data = [],
            state.error = action.payload
        })
    }
});

export default signUpSlice.reducer