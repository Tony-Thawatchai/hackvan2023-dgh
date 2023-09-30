import React from "react";
import { Button } from "@mui/material";

function CheckinBTN({ data }) {
  // patch request to update the last served date
  console.log(data._id);
  const handleClick = async () => {
    const dateString = new Date().toLocaleDateString().toString();
    // const res = await fetch(`http://localhost:3000/client/update//${data._id}`, {
    const res = await fetch(`${process.env.REACT_APP_API_PORT}/client/update//${data._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        FamilyMount: data.FamilyMount,
        address: data.address,
        servedDate: dateString,
      }),
    });
    const updatedata = await res.json();
    console.log(updatedata);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        Check in
      </Button>
    </>
  );
}

export default CheckinBTN;
