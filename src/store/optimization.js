import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    optimization: {},
    forecast: {}
}

const optimizationReducer = createSlice({
    name: 'optimization',
    initialState,
    reducers: {
        setOptimization: (state, action) => {
            state.optimization = action.payload
        }, 
        setForecast: (state, action) => {
            state.forecast = action.payload
        }
    }
})

export const {setOptimization, setForecast} = optimizationReducer.actions
export default optimizationReducer.reducer