import { useState, useEffect } from "react";
import "./App.css";
import MainThree from "./dataa/MainThree";
import Search from "./dataa/Search";
import Navbar from "./layout/Navbar";
import axios from "axios";
import Display from "./dataa/Display";
import CtState from "./context/CtState";

const App = () => {
  const [result, setResult] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      const res = await axios.get(`https://covid19.mathdro.id/api`);
      const { confirmed, recovered, deaths, lastUpdate } = res.data;
      confirmed.text = "Confirmed";
      recovered.text = "Recovered";
      deaths.text = "Deaths";
      var ress = [confirmed, recovered, deaths];
      setResult(ress);
      setDate(lastUpdate);
    };
    fetchdata();
    //eslint-disable-next-line
  }, []);

  return (
    <CtState>
      <div className="bg-dark">
        <Navbar />
        <div className="container">
          <MainThree result={result} date={date} />
          <Search />
          <Display />
        </div>
      </div>
    </CtState>
  );
};

export default App;
