import { CountryActionTypes } from "./country.types";

export const setCurrentCountry = (country) => ({
  type: CountryActionTypes.SET_CURRENT_COUNTRY,
  payload: country,
});
