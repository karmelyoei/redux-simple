import { CountryActionTypes } from "./country.types";

const INITIAL_STATE = {
  currentCountry: "",
  number: 0,
};

const CountryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CountryActionTypes.SET_CURRENT_COUNTRY:
      return {
        currentCountry: action.payload,
        number: state.number + 1,
      };
    default:
      return state;
  }
};

export default CountryReducer;
