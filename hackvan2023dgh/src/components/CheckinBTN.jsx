import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";

function CheckinBTN({ data, onClick }) {
  // patch request to update the last served date
//   console.log(data._id);
  const [updateData, setUpdateData] = useState(data);
  const dateString = new Date().toLocaleDateString().toString();
  const update = { ...data, servedDate: dateString };
  const handleClick = () => {
    setUpdateData(update);
    onClick(updateData);
    // onUpdate(updateData)
  };
  console.log(updateData);

  //   const handleClick = async () => {

  //     const { _id, ...dataToUpdate } = data;
  //     // const res = await fetch(`http://localhost:3000/client/update/${data._id}`, {
  //       const res = await fetch(`${process.env.REACT_APP_API_PORT}/client/update//${data._id}`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         ...dataToUpdate,
  //         servedDate: dateString,
  //       }),
  //     });
  //     const updatedata = await res.json();
  //     console.log(updatedata);
  //   };

  return (
    <>
      <Button variant="contained" onClick={handleClick}>
        Check in
      </Button>
    </>
  );
}

export default CheckinBTN;
