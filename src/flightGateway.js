import moment from "moment";
const today = moment().format("DD-MM-YYYY");

export const sourceUrl = `https://api.iev.aero/api/flights`;

export const fetchFlights = () => {
  return fetch(`${sourceUrl}/${today}`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error("There is nothing to show");
  });
};
