import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit"
import { toast } from 'react-toastify';

import { api } from "../../../services/api";
import { appUrls } from "../../../services/urls"


const initialState = {
    loading: false,
    data: [],
    error: ""
}


export const createNewQuiz = createAsyncThunk(
    "quiz/createNewQuiz", 
    async (formData, { rejectWithValue}) => {
        try {
            const res = await api.post(appUrls?.CREATE_QUIZ_URL, formData)
            console.log(res, "lamba")
            if(res.status === 200) {
                toast("Proceed to the Next Section", {
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

const createQuizSlice = createSlice({
    name: "quiz",
    initialState,
    extraReducers: builder => {
        builder.addCase(createNewQuiz.pending, state => {
            state.loading = true
        });
        builder.addCase(createNewQuiz.fulfilled, (state, action) => {
            state.loading = false,
            state.data = action.payload,
            state.error = ""
        });
        builder.addCase(createNewQuiz.rejected, (state, action) => {
            state.loading = false,
            state.data = [],
            state.error = action.payload
        })
    }
});

export default createQuizSlice.reducer