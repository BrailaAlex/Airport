import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import SearchForm from "./components/searchform/SearchForm";
import FlightInfo from "./components/mainboard/FlightInfo";
import store from "./store";
import "./index.scss";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <SearchForm />
        <FlightInfo />
      </Router>
    </Provider>
  );
};

export default App;
