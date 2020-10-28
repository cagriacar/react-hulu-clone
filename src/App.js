import { useState } from "react";
import "./App.css";
import { Header, Navbar, Movies } from "./components";
import requests from './components/movies/api/tmbd/requests'

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchTrend)
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* Navbar */}
      <Navbar setSelectedOption={setSelectedOption} />
      {/* Movies */}
      <Movies selectedOption={selectedOption} />
    </div>
  );
}

export default App;
