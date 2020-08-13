import React, { useEffect } from "react";
import qs from "qs";
import { connect } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { showFilteredList } from "../flights.selectors";
import { getFlightList, showFlightNumber } from "../flights.actions";
import FlightBoardBody from "./FlightBoardBody";
import Spinner from "../spinner/Spinner";

const FlightBoard = ({ flightData, getFlightList, showFlightNumber }) => {
  const { direction } = useParams();

  const flightNumber = qs.parse(useLocation().search, {
    ignoreQueryPrefix: true,
  }).search;

  useEffect(() => {
    showFlightNumber(flightNumber);
    getFlightList(direction);
  }, [direction, flightNumber]);

  let isFlights;

  if (flightData && flightData.length > 0) {
    isFlights = flightData.map((flight) => (
      <FlightBoardBody key={flight.id} {...flight} />
    ));
  } else if (!flightData) {
    isFlights = <Spinner />;
  } else {
    isFlights = (
      <tr className="not-found">
        <td colSpan="6">
          <span>Not flights</span>
        </td>
      </tr>
    );
  }

  return (
    <div className="flight-board">
      <table className="flight-board__table">
        <thead className="flight-board__table__head">
          <tr className="flight-board__table__head-title">
            <th>Terminal</th>
            <th>Local time</th>
            <th>Destination</th>
            <th>Status</th>
            <th>Airline</th>
            <th>Flight</th>
          </tr>
        </thead>
        <tbody className="flight-board__table__body">{isFlights}</tbody>
      </table>
    </div>
  );
};
const mapState = (state) => {
  return {
    flightData: showFilteredList(state),
  };
};

const mapDispatch = {
  getFlightList,
  showFlightNumber,
};

export default connect(mapState, mapDispatch)(FlightBoard);
