import React, { Fragment } from "react";
import "./App.css";
import Selection from "./selection";
import { connect } from "react-redux";

function App({ country , number}) {
  return (
    <Fragment>
      <Selection />
      <h1> {country}</h1>
      <h1> {number}</h1>
    </Fragment>
  );
}

const mapsToProps = ({ country }) => ({
  country: country.currentCountry,
  number: country.number,
});

export default connect(mapsToProps, null)(App);
