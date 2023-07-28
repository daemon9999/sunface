import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    location: {}
}

const optimizationReducer = createSlice({
    name: 'optimization',
    initialState,
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload
        }
    }
})

export const {setLocation} = optimizationReducer.actions
export default optimizationReducer.reducer