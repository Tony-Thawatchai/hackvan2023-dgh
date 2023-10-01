import "./App.css";
import React, { useState, useEffect } from "react";

import ButtonBar from "./components/ButtonBar";
import TextField from "@mui/material/TextField";
import NameCard from "./components/NameCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

function CheckInLayout() {
  const navigate = useNavigate();
  const buttonItems = ["name", "address", "phone"];
  const [selectedValue, setSelectedValue] = useState("");
  const handleButtonClick = (value) => {
    setSelectedValue(value);
  };

  const [searchTerm, setSearchTerm] = useState(null);

  const [searchResults, setSearchResults] = useState([]);

  const [inputText, setInputText] = useState("");
  const handleInput = (value) => {
    setInputText(value);
  };

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
        // console.log(
        //   `${process.env.REACT_APP_API_PORT}/client/getone/address/${inputText}`
        // );
        // const response = await fetch(
        //   `http://localhost:3000/client/getone/address/${inputText}`
        // );
        const response = await fetch(
          `${process.env.REACT_APP_API_PORT}/client/getone/address/${inputText}`
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
    <div>
      <div className=" topBar"></div>
      <div className=" w-full text-center h-[30%] flex flex-col items-center justify-around  px-[4%] ">
        <button
          onClick={() => navigate("/volunteerhome")}
          className="  backBTN self-start"
        >
          {" "}
          <ArrowBackIosNewIcon /> Back
        </button>
        <div className="w-[50%] mx-auto">
          <h1 className="pageHeadline">Check-in a Client</h1>
        </div>
      </div>
      <div className="main">
        <p className="pageDescription uppercase ">SEARCHING BY:</p>
        <ButtonBar values={buttonItems} onSelect={handleButtonClick} />
        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={(event) =>
              handleInput(event.target.value)
            }
            variant="outlined"
            fullWidth
            label="Search"
            // className="w-[50%]"
          />
        </div>

        {searchResults != null
          ? searchResults.map((result, index) => (
              <NameCard key={index} data={result} />
            ))
          : null}
      </div>
    </div>
  );
}

export default CheckInLayout;
