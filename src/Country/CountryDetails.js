// CountryDetail.js

import React from "react";
import { useLocation } from "react-router-dom";

const CountryDetail = () => {
  const location = useLocation();
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <div className="wrapper">
              <div>
                <img
                  width="100%"
                  src={location.state.flags.png}
                  alt={location.state.name.common}
                />
              </div>
              <div className="black p-4">
                <h1>{location.state.name.common}</h1>
                <strong>Population: </strong>
                <span>{location.state.population}</span> <br />
                <strong>Region: </strong>
                <span>{location.state.region}</span> <br />
                <strong>Capital: </strong>
                <span>{location.state.capital}</span> <br />
                <strong>Currency / Symbol: </strong>
                <span>{location.state.languages.eng}</span> <br />
                <strong>Languages: </strong>
                <span>{location.state.languages.eng}</span> <br />
                <strong>Borders: </strong>
                <span>{location.state.borders}</span> <br />
                <strong>Lat Long: </strong>
                <span>{location.state.latlng}</span> <br />
                <strong>Flag: </strong>
                <span>{location.state.flag}</span> <br />
                <strong>Timezones: </strong>
                <span>{location.state.timezones}</span> <br />
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="cursor">
              click <a href="/">Here</a>Check other Countries
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetail;
