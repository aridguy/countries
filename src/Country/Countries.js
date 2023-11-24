import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import axios from "axios";

// ... (previous imports)

const Countries = () => {
  // state variable for countries data
  const [allCountries, setAllCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage] = useState(12);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setAllCountries(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const region = [
    ...new Set(allCountries.map((country) => country.region?.value)),
  ];

  const filteredCountries = allCountries.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedRegion === "all" ||
        (country.region && country.region.value === selectedRegion))
  );
  // Logic for pagination
  const indexOfLastCountry = currentPage * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  // const region = [
  //   ...new Set(allCountries.map((country) => country.region?.value)),
  // ];

  return (
    <div>
      <Navbar />

      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <div className="search">
                <i className="fas fa-search search-iconic"></i>
                <input
                  placeholder="Search for country..."
                  className="search-box shadow-3 mx-3"
                  type="search"
                  name="search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="col-md-2">
              <div>
              <select
              className="form-control"
              onChange={(e) => setSelectedRegion(e.target.value)}
            >
              <option value="all">Filter by Region</option>
              {region.map((regionName) => (
                <option key={regionName} value={regionName}>
                  {regionName}
                </option>
              ))}
            </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="container">
          <div className="row">
            {currentCountries.map((country) => (
              <div key={country.cca3} className="col-md-3 mb-4">
                <div className="country-card shadow-3">
                  {/* Assuming you have an image URL in the API response */}
                  <img
                    width="100%"
                    className="country-image"
                    src={country.flags.png}
                    alt={`flag-${country.name.common}`}
                  />
                  <div>
                    <p className="fw-bold mx-3 mt-1">{country.name.common}</p>
                    <small className="mx-3">
                      <b>Population:</b> {country.population}
                    </small>{" "}
                    <br />
                    <small className="mx-3">
                      <b>Region:</b> {country.region}
                    </small>{" "}
                    <br />
                    <small className="mx-3">
                      <b>Capital: </b>
                      {country.capital}
                    </small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mt-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pagination d-flex justify-content-center flex-wrap">
                {Array.from(
                  {
                    length: Math.ceil(
                      filteredCountries.length / countriesPerPage
                    ),
                  },
                  (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`btn btn-sm ${
                        currentPage === index + 1 ? "btn-primary" : "btn-info"
                      } mx-1 my-1`}
                    >
                      {index + 1}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Countries;
