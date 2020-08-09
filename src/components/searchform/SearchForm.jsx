import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./searchSection.scss";

const SearchForm = () => {
  const [searchInfo, setSearchParams] = useState("");
  const searchParam = searchInfo ? `?search=${searchInfo}` : "";
  return (
    <section className="search-section">
      <h2 className="title">Search flight</h2>
      <div className="search-line-container">
        <form className="search-form" name="searchFlightForm">
          <i className="fas fa-search"></i>
          <input
            value={searchInfo}
            onChange={() => setSearchParams(event.target.value)}
            className="search-form__input"
            type="text"
            placeholder="Please enter the flight #"
          />
          <Link
            style={{
              textDecoration: "none",
            }}
            to={`/flights/departures${searchParam}`}
          >
            <button className="search-btn">Search</button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default SearchForm;
