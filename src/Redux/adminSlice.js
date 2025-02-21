import {createSlice} from '@reduxjs/toolkit'
const INITIAL_STATE={
    token:""

}
const adminSlice= createSlice({
    name:'admin',
    initialState:INITIAL_STATE,
    reducers:{
        adminCredential:(state,action)=>{
            state.token=action.payload.token
        }
    }

})

export const {adminCredential,adminProfile}= adminSlice.actions

export default adminSlice.reducer