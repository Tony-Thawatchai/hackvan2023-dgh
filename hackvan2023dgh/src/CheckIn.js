import "./App.css";
import { useState, useEffect } from "react";

import ButtonBar from "./components/ButtonBar";
import TextField from "@mui/material/TextField";
import NameCard from "./components/NameCard";
import CheckInLayout from "./CheckInLayout";
import FormLayout from "./FormLayout";
import { useNavigate } from "react-router-dom";

function CheckIn() {
  const navigate = useNavigate();
  const buttonItems = ["Check in", "New Client", "Update data"];
  const [selectedValue, setSelectedValue] = useState("");
  const handleButtonClick = (value) => {
    setSelectedValue(value);
    navigate(`/${selectedValue}`);
  };

  return (
    <div className="main">
      <div className="bg-secondary w-full text-center h-[30%] flex flex-col align-middle justify-center ">
        <h1 className="text-3xl font-bold">Volunteer</h1>
        <p>What are you helping your client today?</p>
      </div>
      <div className=" mainContentWrap ">
        {buttonItems.map((item) => (
          <button
            key={item}
            className="flex w-[10rem] max-w-full   p-2 flex-col items-center justify-center border-2 border-borderColor rounded-md m-2 text-center hover:bg-primary/20 hover:text-white hover:bg-opacity-100 hover:border-primary
            sm:w-[20rem] sm:max-w-full md:w-[30rem] md:max-w-full lg:w-[40rem] lg:max-w-full 
            "
            onClick={() => handleButtonClick(item)}
          >
            {item}
          </button>
        ))}
        {/* <button >
          
          Login
        </button> */}
      </div>
      {/* {selectedValue === "Check in" && <CheckInLayout />} */}
      {/* {selectedValue === "New Client" && <FormLayout />} */}
    </div>
  );
}

export default CheckIn;
