import { combineReducers } from "redux";
import countryReducer from "./country/country.reducer";

const rootReducer = combineReducers({
  country: countryReducer,
});

export default rootReducer;
