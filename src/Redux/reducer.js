import { combineReducers } from "@reduxjs/toolkit";
import adminSlice from './adminSlice'
const rootReducer = combineReducers({
    admin:adminSlice, 
})

export default rootReducer