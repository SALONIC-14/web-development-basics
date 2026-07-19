import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
    name:'theme',
    initialState:{
        themeColor:'#ff0000'
                 //''
    },
    reducers:{
        setBlack:(state)=>{
            state.themeColor='#000000';
        },
        setWhite:(state)=>{
            state.themeColor='#f5fffa';
        },
        setBlue:(state)=>{
            state.themeColor='#00008b';
        }
    }
})

export const {setBlack,setBlue,setWhite}=ThemeSlice.actions;
export default ThemeSlice.reducer;