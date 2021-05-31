import React from "react";
import Detail from "./Detail";

const Display = ({ country }) => {
  return (
    <div
      style={{
        margin: "2% auto",
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gridGap: "1rem",
      }}
    >
      {country &&
        country.map((det) => {
          return <Detail key={det.value} text={det.text} value={det.value} />;
        })}
    </div>
  );
};

export default Display;
