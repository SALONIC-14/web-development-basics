import {configureStore} from "@reduxjs/toolkit";
import CounterSlice from './features/CounterSlice.js'


export const Store = configureStore({
    reducer: {
        counter:CounterSlice
    }
})