import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import CheckEmailSlice from "./redux/CheckEmail/CheckEmailSlice";

const store = configureStore({
    reducer: {
        checkEmail: CheckEmailSlice
    },

    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export default store