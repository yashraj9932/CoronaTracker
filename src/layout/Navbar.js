import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar py-4">
      <h1
        className="font-weight-bold text-white "
        style={{ paddingBottom: "0.3%", borderBottom: "1px solid white" }}
      >
        C<i className="fas fa-virus"></i>vid-19 Tracker
      </h1>
    </nav>
  );
};

export default Navbar;
