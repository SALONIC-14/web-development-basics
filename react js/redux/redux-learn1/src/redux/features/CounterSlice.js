import { createSlice } from "@reduxjs/toolkit";

const CounterSlice= createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        Increament:(state)=>{
            state.value+=1
        },
        Decreament:(state)=>{
            state.value-=1
        },
        Increamentbynumber:(state,action)=>{
            state.value+=Number(action.payload)
        }
    }
})


export const {Increament,Decreament,Increamentbynumber}=CounterSlice.actions
export default CounterSlice.reducer