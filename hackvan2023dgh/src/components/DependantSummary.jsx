import React from "react";
import { useState } from "react";
import FormDependant from "./FormDependant";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button } from "@mui/material";
import SuccessModal from "./SuccessModal";



function DependantSummary() {
  const navigate = useNavigate();
  const [successModal, setSuccessModal] = useState(false);

  const handleFormSubmit = (data) => {
    setSuccessModal(true);
  console.log(data);
};
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        width: "100%",
      }}
    >
      {successModal ? (
        <SuccessModal />
      ) : (
        <div>
          <h3 style={{ fontWeight: "bold" }}>Name</h3>
          <h3 style={{ fontWeight: "bold" }}>Last 4 digits of ID</h3>
          <h3 style={{ fontWeight: "bold" }}>Gender</h3>
          <h3 style={{ fontWeight: "bold" }}>Year of Birth</h3>
          <h3 style={{ fontWeight: "bold" }}>Additional notes</h3>
          <div
            style={{
              display: "flex",
              gap: ".5rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              sx={{
                boxShadow: "none",
                color: "black",
                backgroundColor: "#F0F0F0",
                border: "1px solid black",
                ":hover": {
                  backgroundColor: "#5271FF66",
                  color: "black",
                  border: "1px solid #5271FF",
                  boxShadow: "none",
                },
              }}
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleFormSubmit}
            >
              Edit
            </Button>
            <Button
              sx={{
                boxShadow: "none",
                color: "black",
                backgroundColor: "#F0F0F0",
                border: "1px solid black",
                ":hover": {
                  backgroundColor: "#5271FF66",
                  color: "black",
                  border: "1px solid #5271FF",
                  boxShadow: "none",
                },
              }}
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleFormSubmit}
            >
              Add more dependants
            </Button>
            <Button
              sx={{
                boxShadow: "none",

                backgroundColor: "#5271FF",
                ":hover": {
                  backgroundColor: "#F0F0F0",
                  color: "black",
                  border: "1px solid #5271FF",
                  boxShadow: "none",
                },
              }}
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleFormSubmit}
            >
              Done
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DependantSummary;
