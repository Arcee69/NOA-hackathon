import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit"
import { toast } from 'react-toastify';

// import TokenService from "../../services/token";
import { api } from "../../services/api"
import { appUrls } from "../../services/urls"


const initialState = {
    loading: false,
    data: [],
    error: ""
}

export const loginUser = createAsyncThunk(
    "user/loginUser", 
    async (data, { rejectWithValue }) => {
        try {
            const res = await api.post(appUrls?.LOGIN_URL, data);
            if (res?.status === 201) {
                const { token, ...newObject } = res?.data;
                sessionStorage.setItem("token", token);
                sessionStorage.setItem("userObj", JSON.stringify(newObject));
                toast("Logged In Successfully", {
                    position: "top-right",
                    autoClose: 5000,
                    closeOnClick: true,
                })
            }
            return res?.data
        }
        catch (err) {
            toast(`${err.data.message}`, {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
            });
            return rejectWithValue(err.data.message)
        }
    }
)


const loginSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: builder => {
        builder.addCase(loginUser.pending, state => {
            state.loading = true
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.loading = false,
            state.data = [],
            state.error = action.payload
        })
    }
});

export default loginSlice.reducer