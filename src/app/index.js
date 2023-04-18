import { configureStore } from "@reduxjs/toolkit"
import siteReducer from "./languages"

export const store = configureStore({
    reducer: {
        site: siteReducer
    }
})