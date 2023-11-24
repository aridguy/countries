// import logo from './logo.svg';
import "./App.css";
import Countries from "./Country/Countries";
import CountryDetails from "./Country/CountryDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Countries />}></Route>
        <Route path="/countries/id" element={<Countries />}></Route>
        <Route path="/countryDetails v" element={<CountryDetails />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
