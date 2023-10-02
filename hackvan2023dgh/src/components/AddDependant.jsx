import React, { useState } from "react";
import FormDependant from "./FormDependant";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const handleFormSubmit = (data) => {
  console.log(data);
}

function AddDependant() {
    const navigate = useNavigate();
    return (
    <div className="main">
    <div className=" w-full text-center h-[30%] flex flex-col items-center justify-around  px-[4%] ">
      <button
        onClick={() => navigate("/volunteerhome")}
        className="  backBTN self-start"
      >
        {" "}
        <ArrowBackIosNewIcon /> Back
      </button>
      <div className="w-[50%] mx-auto">
        <h1 className="pageHeadline">Add dependant</h1>
      </div>
    </div>

    <div className="form-wrap">
     <FormDependant onSubmit={handleFormSubmit} />
    </div>
  </div>

  )
}

export default AddDependant
