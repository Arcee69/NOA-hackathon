import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit"
import { toast } from 'react-toastify';
;
import { appUrls } from "../../../services/urls"
import { api } from "../../../services/api";


const initialState = {
    loading: false,
    data: [],
    error: ""
}


export const addAdmin = createAsyncThunk(
    "admin/addAdmin", 
    async (values, { rejectWithValue}) => {
        try {
            const res = await api .post(appUrls?.CREATE_ADMIN_URL, values)
            console.log(res, "lamba")
            if(res.status === 200) {
                toast("Account created successfully", {
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

const addAdminSlice = createSlice({
    name: "admin",
    initialState,
    extraReducers: builder => {
        builder.addCase(addAdmin.pending, state => {
            state.loading = true
        });
        builder.addCase(addAdmin.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        });
        builder.addCase(addAdmin.rejected, (state, action) => {
            state.loading = false,
            state.data = [],
            state.error = action.payload
        })
    }
});

export default addAdminSlice.reducer