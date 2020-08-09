import React from "react";
import "./spinner.scss";

const Spinner = () => {
  return (
    <tr className="positioning-container">
      <td className="spinning-container">
        <div className="airplane-container">
          <i className="fas fa-plane" />
        </div>
      </td>
    </tr>
  );
};

export default Spinner;
