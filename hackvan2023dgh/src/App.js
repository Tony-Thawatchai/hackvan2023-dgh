import './App.css';
import { useState } from 'react';
import ButtonBar from './components/ButtonBar';
import TextField from "@mui/material/TextField";
import NameCard from './components/NameCard';

function App() {
  const buttonItems = ["name","address","phone"];
  const [selectedValue, setSelectedValue] = useState('');
  const handleButtonClick = (value) => {
    setSelectedValue(value);
  }

  const [inputText, setInputText] = useState('');
  const handleInput = (value) => {
    setInputText(value);
  }

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
      <p>Search Text: {inputText}</p>
    </div>
  );
}

export default App;
