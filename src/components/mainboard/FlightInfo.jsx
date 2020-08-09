import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faPlaneArrival,
} from "@fortawesome/free-solid-svg-icons";
import { showFlightNumber, showFlightDirection } from "../flights.selectors";
import "./mainboard.scss";
import FlightBoard from "./FlightBoard";

const FlightInfo = ({ flightNumber, direction }) => {
  const searchFlight = flightNumber ? `?search=${flightNumber}` : "";
  const style = {
    textDecoration: "none",
  };
  return (
    <div className="main-board">
      <div className="flight-requests">
        <div className="flight-requests__nav-item">
          <Link style={style} to={`/flights/departures${searchFlight}`}>
            <button
              className={classNames("flight-requests__departure-btn", "btn", {
                choosen: direction === "departures",
              })}
            >
              <div>
                <FontAwesomeIcon icon={faPlaneDeparture} />
              </div>
              <span className="flight-requests__text">Departures</span>
            </button>
          </Link>
        </div>
        <div className="flight-requests__nav-item">
          <Link style={style} to={`/flights/arrivals${searchFlight}`}>
            <button
              className={classNames("flight-requests__arrival-btn", "btn", {
                choosen: direction === "arrivals",
              })}
            >
              <div>
                <FontAwesomeIcon icon={faPlaneArrival} />
              </div>
              <span className="flight-requests__text">Arrivals</span>
            </button>
          </Link>
        </div>
      </div>
      <Route exact path={`/flights/:direction`}>
        <FlightBoard />
      </Route>
    </div>
  );
};

const mapState = (state) => {
  return {
    flightNumber: showFlightNumber(state),
    direction: showFlightDirection(state),
  };
};

export default connect(mapState)(FlightInfo);
