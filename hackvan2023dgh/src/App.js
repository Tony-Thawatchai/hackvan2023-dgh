import "./App.css";
import { useState, useEffect } from "react";

import ButtonBar from "./components/ButtonBar";
import TextField from "@mui/material/TextField";
import NameCard from "./components/NameCard";
import CheckInLayout from "./CheckInLayout";
import FormLayout from "./FormLayout";

function App() {
  const buttonItems = ["Check in", "Update data", "New Client"];
  const [selectedValue, setSelectedValue] = useState("");
  const handleButtonClick = (value) => {
    setSelectedValue(value);
  };

  return (
    <div className="main">
      {buttonItems.map((item) => (
        <button className="button" onClick={() => handleButtonClick(item)}>
          {item}
        </button>
      ))}
      {selectedValue === "Check in" && <CheckInLayout />}
      {selectedValue === "New Client" && <FormLayout />}
    </div>
  );
}

export default App;
