
import './App.css';
import { useState, useEffect } from "react";
import { set } from "mongoose";
import ButtonBar from './components/ButtonBar';
import TextField from "@mui/material/TextField";
import NameCard from './components/NameCard';

function App() {
  const buttonItems = ["name","address","phone"];
  const [selectedValue, setSelectedValue] = useState('');
  const handleButtonClick = (value) => {
    setSelectedValue(value);
  }

  const [searchTerm, setSearchTerm] = useState(null);
  
  const [searchResults, setSearchResults] = useState(null);

  const [inputText, setInputText] = useState('');
  const handleInput = (value) => {
    setInputText(value);
  }
  
  //  const getResult = (value) => {
  //   console.log(value);
  //   setSearchTerm(value);
  // };
  console.log(searchResults);
  useEffect(() => {
    setSearchResults(null);
    // fetch from API
    const fetchItems = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/client/getone/address/${inputText}`
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
    if (inputText !== "") {
      fetchItems();
    }
  }, [inputText]);

  return (
    <div className="main">
      <h1>Client List</h1>
      <ButtonBar values={buttonItems} onSelect={handleButtonClick} />
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleInput(event.target.value)}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <p>Category: {selectedValue}</p>

      {searchResults != null ? <NameCard data={searchResults} /> : null}

    </div>
  );
}

export default App;
