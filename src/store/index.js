import {configureStore} from "@reduxjs/toolkit"
import modal from "./modal"
import optimization from "./optimization"
const store = configureStore({
    reducer: {
        modal,
        optimization
    }
})
export default store