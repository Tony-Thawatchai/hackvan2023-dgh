
import React, { useState, useEffect } from "react";


import TextField from "@mui/material/TextField";
import NameCard from "./NameCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

function SingelClientLayout({data}) {
  const navigate = useNavigate();
  return (
    <div>
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
        


        
          
              <NameCard  data={data} />
          
          
      </div>
    </div>
  );
}

export default SingelClientLayout;
