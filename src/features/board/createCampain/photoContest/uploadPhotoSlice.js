import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit"


const initialState = {
    loading: false,
    data: [],
    error: ""
}


export const uploadPhoto = createAsyncThunk(
    "photo/uploadPhoto", 
    async (value, { rejectWithValue}) => {
        if(value) {
            const res = value
            return res;
        }
        else {
            return rejectWithValue(err);
        }
})

const uploadPhotoSlice = createSlice({
    name: "photo",
    initialState,
    extraReducers: builder => {
        builder.addCase(uploadPhoto.pending, state => {
            state.loading = true
        });
        builder.addCase(uploadPhoto.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        });
        builder.addCase(uploadPhoto.rejected, (state, action) => {
            state.loading = false,
            state.data = [],
            state.error = action.payload
        })
    }
});

export default uploadPhotoSlice.reducer