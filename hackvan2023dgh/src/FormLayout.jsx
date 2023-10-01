import React, { useState } from "react";
import FormComponent from "./components/FormComponent";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function FormLayout(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    household: {
      name: "",
      phoneNumber: "",
      address: "",
      community: "",
    },
    familyMembers: [],
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

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
          <h1 className="pageHeadline">First-time client profile</h1>
        </div>
      </div>

      <div className="form-wrap">
        <FormComponent onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}

export default FormLayout;
