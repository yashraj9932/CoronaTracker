import React, { useState } from "react";

const Search = (props) => {
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();

    props.searchData(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form" style={{ marginTop: "3%" }}>
        <input
          type="text"
          name="text"
          value={text}
          placeholder="Search By Country"
          onChange={onChange}
          className="btn btn-light btn-block"
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
          style={{ backgroundColor: "#092E53" }}
        />
      </form>
    </div>
  );
};

export default Search;
