import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:0,
}

const exampleSlice=createSlice({
    name:"example",
    initialState,
    reducers:{
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1

        },
        incrementsByAmount:(state,action)=>{
            state.value+=action.payload
        }
    }

})

export const {increment,decrement,incrementsByAmount}=exampleSlice.action
export default exampleSlice.reducer