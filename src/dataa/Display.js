import React from "react";
import Detail from "./Detail";

const Display = ({ country }) => {
  return (
    <div className="row">
      {country &&
        country.map((det) => {
          return <Detail key={det.value} text={det.text} value={det.value} />;
        })}
    </div>
  );
};

export default Display;
