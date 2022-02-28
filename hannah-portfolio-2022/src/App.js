import "./App.css";
import Map from "./components/Map";
import { useEffect, useState } from "react";
import Axios from "axios";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [hannahInfo, setHannahInfo] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await Axios.get(
        `https://docs.google.com/spreadsheets/d/1digdoyNtFTSe-V77cx0PEvhRQ3oExE_asGHm7Od8rEY/export?format=csv`
      );
      const csv = require("csvtojson");
      csv()
        .fromString(response.data)
        .then((data) => {
          console.log(data);
          setHannahInfo(data);
        });
    }
    getData();
  }, []);

  return (
    <div className="App">
      <Header />
      Hi it's Hannah!!!
      <Map />
      <Body hannahInfo={hannahInfo} />
      <Footer />
    </div>
  );
}

export default App;
