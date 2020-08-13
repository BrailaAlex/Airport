import { createSelector } from "reselect";
import moment from "moment";

export const showFlightsList = (state) => {
  return state.flights.flightsData;
};

export const showFlightNumber = (state) => {
  return state.flights.flightNumber;
};

export const showFlightDirection = (state) => {
  return state.flights.direction;
};

export const showFilteredList = createSelector(
  [showFlightsList, showFlightNumber, showFlightDirection],
  (flightList, flightNumber, flightsDirection) => {
    if (!flightList) return flightList;
    return flightList
      .map((flight) => {
        const destination =
          flight["airportToID.name_en"] || flight["airportFromID.name_en"];

        const statusName =
          flightsDirection === "departures" ? "Took of" : "Landed";

        const statusTime =
          flight.status === "DP"
            ? moment(flight.timeDepFact).format("h:mm")
            : moment(flight.timeLandFact).format("h:mm");

        const status = `${statusName} ${statusTime}`;

        return {
          id: flight.ID,
          terminal: flight.term,
          schedule: moment(flight.timeToStand).format("h:mm"),
          destination,
          status,
          companyLogoSource: flight.airline.en.logoSmallName,
          companyName: flight.airline.en.name,
          flightNum: flight.codeShareData[0].codeShare,
        };
      })
      .filter((flight) => {
        if (!flightNumber) return flight;
        // const newFlight = flight.flightNum.toLowerCase();
        // const searchNum = flightNumber.toLowerCase();
        return flight.flightNum
          .toLowerCase()
          .includes(flightNumber.toLowerCase());
      });
  }
);
