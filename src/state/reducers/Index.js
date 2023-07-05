import {combineReducers } from "redux";
import AmountReducer from "./AmountReducers";

const reducers =combineReducers({
    amount:AmountReducer  
})
export default reducers;