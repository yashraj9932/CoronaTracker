import { Component } from "react";
import "./App.css";
import MainThree from "./dataa/MainThree";
import Search from "./dataa/Search";
import Navbar from "./layout/Navbar";
import axios from "axios";
import Display from "./dataa/Display";

class App extends Component {
  state = {
    result: null,
    date: null,
    country: null,
  };
  async componentDidMount() {
    const res = await axios.get(`https://covid19.mathdro.id/api`);
    const { confirmed, recovered, deaths, lastUpdate } = res.data;
    confirmed.text = "Confirmed";
    recovered.text = "Recovered";
    deaths.text = "Deaths";
    var ress = [confirmed, recovered, deaths];
    this.setState({ result: ress });
    this.setState({ date: lastUpdate });
  }

  searchData = async (text) => {
    const res = await axios.get(
      `https://covid19.mathdro.id/api/countries/${text}`
    );
    const { confirmed, recovered, deaths } = res.data;
    confirmed.text = "Confirmed";
    recovered.text = "Recovered";
    deaths.text = "Deaths";
    var ress = [confirmed, recovered, deaths];
    console.log(ress);
    this.setState({ country: ress });
  };
  render() {
    return (
      <div className="bg-dark">
        <Navbar />
        <div className="container">
          <MainThree result={this.state.result} date={this.state.date} />
          <Search searchData={this.searchData} />
          <Display country={this.state.country} />
        </div>
      </div>
    );
  }
}

export default App;
