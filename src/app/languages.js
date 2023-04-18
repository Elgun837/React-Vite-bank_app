import { createSlice } from "@reduxjs/toolkit";


export const site = createSlice({
    name: 'language',
    initialState: {
        language: 'En'
    },
    reducers: {
        setLanguage:(state,action) => {
            state.language = action.payload
        }
    }
})

export const {setLanguage} = site.actions

export default site.reducer