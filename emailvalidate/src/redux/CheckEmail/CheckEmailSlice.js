import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isLoading: false,
    error: "",
    message: {
        exist: null,
        message: ""
    },
}

export const fetchCheckEmail = createAsyncThunk("checkEmail/fetchCheckEmail", async (email) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        }
    }
    const response = await axios.post(`http://127.0.0.1:8000/api/email-validation/`, email, config)
    return response.data
})

const checkEmialSlice = createSlice({
    name: "checkEmail",
    initialState,
    reducers: {},
    extraReducers : (builder) => {
        builder.addCase(fetchCheckEmail.pending, (state) => {
            state.isLoading = true;
            state.error = "";
            state.message = {
                exist: null,
                message: ""
            };
        }).addCase(fetchCheckEmail.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = "";
            state.message = action.payload
        }).addCase(fetchCheckEmail.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
            state.message = {
                exist: null,
                message: ""
            };
        })
    }
})


export default checkEmialSlice.reducer