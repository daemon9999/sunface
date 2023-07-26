import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    modals: []
}

const modalReducer = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        appenModal: (state, action) => {
            state.modals.push(action.payload)
        },
        deleteModal: (state, action) => {
            state.modals.pop(action.payload)
        },
        destroyModals: (state) => {
            state.modals = []
        }

    }
})


export const {appenModal, deleteModal, destroyModals} = modalReducer.actions
export default modalReducer.reducer