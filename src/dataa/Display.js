import React from "react";
import Detail from "./Detail";
import CtContext from "../context/ctContext";
import { useContext } from "react";

const Display = () => {
  const ctContext = useContext(CtContext);
  const { country } = ctContext;
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
