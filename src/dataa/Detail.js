import React from "react";

const Detail = ({ text, value }) => {
  return (
    <div
      className="card text-center"
      style={{
        padding: "5%",
      }}
    >
      <h2 style={{ paddingBottom: "1%", borderBottom: "1px solid black" }}>
        {text}
      </h2>
      <h5>{value}</h5>
    </div>
  );
};

export default Detail;
