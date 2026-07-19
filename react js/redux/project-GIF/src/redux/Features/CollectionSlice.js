import { createSlice } from "@reduxjs/toolkit";

const CollectionSlice = createSlice({
    name:'collection',
    initialState:{
        saveResults:{},
        

    },
    reducers:{
        setSaveResults:(state, action)=>{
            state.saveResult=state.saveResults = {
            ...state.saveResults,
            [action.payload.id]: action.payload
}
        },
        removeSaveResults:(state,action)=>{
            state.saveResults=state.saveResults.filter((item)=>item.id !== action.payload)
        },

    }

})

export const {setSaveResults, removeSaveResults} = CollectionSlice.actions;
export default CollectionSlice.reducer;