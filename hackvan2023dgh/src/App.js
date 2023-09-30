import logo from "./logo.svg";
import "./App.css";
import ButtonBar from "./components/ButtonBar";
import NameCard from "./components/NameCard";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";
import { set } from "mongoose";

function App() {
  const sliderItems = ["name", "address", "phone"];
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const getResult = (value) => {
    console.log(value);
    setSearchTerm(value);
  };
  console.log(searchResults);
  useEffect(() => {
    setSearchResults(null);
    // fetch from API
    const fetchItems = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/client/getone/address/${searchTerm}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Only fetch when searchTerm changes
    if (searchTerm !== "") {
      fetchItems();
    }
  }, [searchTerm]);
  return (
    <div className="App">
      <h1>Slider Button</h1>
      <ButtonBar values={sliderItems} />
      <SearchBar onChange={getResult} />
      {searchResults != null ? <NameCard data={searchResults} /> : null}
    </div>
  );
}

export default App;
