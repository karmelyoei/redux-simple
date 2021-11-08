import React, { Fragment } from "react";
import "./App.css";
import { setCurrentCountry } from "./redux/country/country.actions";
import { connect } from "react-redux";

function Selection({ country, setCurrentCountry }) {
  console.log(country);
  const handleChange = (event) => {
    event.preventDefault();
    let countryValue = event.target.value;
    setCurrentCountry(countryValue);
  };
  return (
    <Fragment>
      <div>
        <label>pick a country</label>

        <select
          name="countries"
          id="countries"
          onChange={handleChange}
          value={country}
        >
          <option value="Palestine">Palestine</option>
          <option value="USA">USA</option>
          <option value="China">China</option>
          <option value="Japan">Japan</option>
        </select>
      </div>
    </Fragment>
  );
}

const mapsToProps = ({ country }) => ({ country: country.currentCountry });

const mapDispatchToProps = (dispatch) => ({
  setCurrentCountry: (country) => dispatch(setCurrentCountry(country)),
});

export default connect(mapsToProps, mapDispatchToProps)(Selection);
