import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./searchSection.scss";
import { showFlightDirection } from "../flights.selectors";

const SearchForm = ({ direction }) => {
  const [searchInfo, setSearchParams] = useState("");
  const isDirection = direction ? direction : "departures";
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
            to={`/flights/${isDirection}${searchParam}`}
          >
            <button className="search-btn">Search</button>
          </Link>
        </form>
      </div>
    </section>
  );
};

const mapState = (state) => {
  return {
    direction: showFlightDirection(state),
  };
};

export default connect(mapState)(SearchForm);
