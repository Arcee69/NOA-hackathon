import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit"
import { toast } from 'react-toastify';

import { api } from "../../../../services/api";
import { appUrls } from "../../../../services/urls"


const initialState = {
    loading: false,
    data: [],
    error: ""
}


export const basicInfo = createAsyncThunk(
    "basicInfo/createBasicInfo", 
    async (formData, { rejectWithValue}) => {
        try {
            const res = await api.post(appUrls?.CREATE_BASIC_INFO_URL, formData)
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

const basicInfoSlice = createSlice({
    name: "basicInfo",
    initialState,
    extraReducers: builder => {
        builder.addCase(basicInfo.pending, state => {
            state.loading = true
        });
        builder.addCase(basicInfo.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        });
        builder.addCase(basicInfo.rejected, (state, action) => {
            state.loading = false,
            state.data = [],
            state.error = action.payload
        })
    }
});

export default basicInfoSlice.reducer