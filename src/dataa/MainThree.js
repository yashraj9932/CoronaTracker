import React, { Fragment } from "react";
import dateFormat from "dateformat";
import Detail from "./Detail";

const MainThree = ({ result, date }) => {
  return (
    <Fragment>
      <h2 style={{ color: "#6EACE8" }}>Worldwide statistics:</h2>
      <div className="row">
        {result &&
          result.map((det) => {
            return <Detail key={det.value} text={det.text} value={det.value} />;
          })}
      </div>
      <h3 style={{ color: "#6EACE8" }}>
        Last Updated:{"  "}
        {dateFormat(new Date(date), "dddd, mmmm dS, yyyy, h:MM:ss TT")}
      </h3>
    </Fragment>
  );
};

export default MainThree;
