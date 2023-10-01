import "./App.css";
import React, { useState, useEffect } from "react";

import ButtonBar from "./components/ButtonBar";
import TextField from "@mui/material/TextField";
import NameCard from "./components/NameCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

const getHTTPRequest = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const searchByAddress = async (searchTerm) => {
  const result = await getHTTPRequest(`${process.env.REACT_APP_API_PORT}/household/search/address/${searchTerm}`);
  return result;
  // return new Promise((resolve, reject) => {
  //   resolve(getHTTPRequest(`${process.env.REACT_APP_API_PORT}/household/search/address/${searchTerm}`));
  // });
};

const getClientsByHousehold = async (householdId) => {
  const result = await getHTTPRequest(`${process.env.REACT_APP_API_PORT}/household/${householdId}/clients`);
  return result;
  // return new Promise((resolve, reject) => {
  //   resolve(getHTTPRequest(`${process.env.REACT_APP_API_PORT}/household/${householdId}/clients`));
  // });
};

const getLatestDateServedByHousehold = async (householdId) => {
  const result = await getHTTPRequest(`${process.env.REACT_APP_API_PORT}/household/${householdId}/datesserved/latest`);
  return result;
  // return new Promise((resolve, reject) => {
  //   resolve(getHTTPRequest(`${process.env.REACT_APP_API_PORT}/household/${householdId}/datesserved/latest`));
  // });
};
const CheckInLayout = () => {
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
  useEffect(() => {
    // fetch from API
    // Only fetch when searchTerm changes

    const myFunction = async () => {
      var results = [];

      const households = await searchByAddress(inputText);

      
      // await an array of promises

      const promises = households.map(async (household) => {
        const householdId = household._id;
        const clients = await getClientsByHousehold(householdId);
        const latestDate = await getLatestDateServedByHousehold(householdId);
        const clientinfo = clients.map((client) => {
          const { _id, ...rest } = household;
          return {
            ...client,
            ...rest,
            servedDate: latestDate.date
          };
        })
        results.push(clientinfo);
        console.log(results)
      })

      await Promise.all(promises);

      setSearchResults(results);
    };

    if (inputText.length !== 0) {
      myFunction();
    }

  }, [inputText]);

  return (
    <div className="main">
      {/* <div className=" topBar"></div> */}
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
