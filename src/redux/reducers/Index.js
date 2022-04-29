import { combineReducers } from "redux";
import { Productreducer,selectedProductreducer } from "./Productreducer";
const reducers=combineReducers({
    allproducts:Productreducer,
    product:selectedProductreducer
})
export default reducers