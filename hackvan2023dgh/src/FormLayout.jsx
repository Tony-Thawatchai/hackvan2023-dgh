import React, { useState } from "react";
import FormComponent from "./components/FormComponent";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import mongoose, { set } from "mongoose";
import SuccessModal from "./components/SuccessModal";

function FormLayout(props) {
  const navigate = useNavigate();
  const [successModal, setSuccessModal] = useState(false);
  const [formData, setFormData] = useState({
    household: {
      name: "",
      phoneNumber: "",
      address: "",
      community: "",
    },
    familyMembers: [],
  });

  // const householdId = mongoose.Types.ObjectId();

  const handleFormSubmit = async (data) => {
    const postHousehold = async () => {
      try {
        console.log("form submit", data);
        const response = await fetch(
          `${process.env.REACT_APP_API_PORT}/household/create`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data.householdData),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Assuming the response contains the updated data, you can get it if needed
        const updatedData = await response.json();
        console.log(updatedData);
        const householdId = updatedData._id;
        postClient(data.primaryContact, householdId);
        console.log("success");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    postHousehold();
  };

  const postClient = async (data, householdID) => {
    try {
      const primaryWithHouseholdId = { householdID, ...data };
      console.log("form submit", primaryWithHouseholdId);
      const response = await fetch(
        `${process.env.REACT_APP_API_PORT}/client/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(primaryWithHouseholdId),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      // Assuming the response contains the updated data, you can get it if needed
      const updatedData = await response.json();
      console.log(updatedData);
      setSuccessModal(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  // postClient();
  console.log(formData);
  return (
    <div className="main">
      {" "}
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
        {successModal ? (
          <SuccessModal />
        ) : (
          <>
            <FormComponent onSubmit={handleFormSubmit} />
          </>
        )}
      </div>
    </div>
  );
}

export default FormLayout;
