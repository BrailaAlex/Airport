import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./searchSection.scss";
import { showFlightDirection } from "../flights.selectors";

const SearchForm = ({ direction }) => {
  const [searchInfo, setSearchInfo] = useState("");

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
            onChange={() => setSearchInfo(event.target.value)}
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
            <div className="search-btn">Search</div>
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
