import React, { useReducer } from "react";
import CtReducer from "./ctReducer";
import CtContext from "./ctContext";
import { GET_RESULT } from "./types";
import axios from "axios";

const CtState = (props) => {
  const initialState = {
    result: null,
    date: null,
    country: null,
  };
  const [state, dispatch] = useReducer(CtReducer, initialState);

  const searchData = async (text) => {
    const res = await axios.get(
      `https://covid19.mathdro.id/api/countries/${text}`
    );
    const { confirmed, recovered, deaths } = res.data;
    confirmed.text = "Confirmed";
    recovered.text = "Recovered";
    deaths.text = "Deaths";
    var ress = [confirmed, recovered, deaths];
    console.log(ress);
    dispatch({
      type: GET_RESULT,
      payload: ress,
    });
  };

  return (
    <CtContext.Provider
      value={{
        country: state.country,
        result: state.result,
        date: state.date,
        searchData,
      }}
    >
      {props.children}
    </CtContext.Provider>
  );
};

export default CtState;
