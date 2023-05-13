import { combineReducers } from "redux";
import { countries } from "./countries";
import { activity } from "./activities";

const rootReducer = combineReducers({ countries, activity });

export default rootReducer;
