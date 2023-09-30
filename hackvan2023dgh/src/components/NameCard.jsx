import React, { useEffect } from "react";
import CheckinBTN from "./CheckinBTN";
import { useState } from "react";

const container = {
  width: "80%",
  maxWidth: "900px",
  border: "1px solid #000",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "1rem",
};

const item = {
  flex: 1,
  flexBasis: "25%",
  // backgroundColor: "hotpink",
};

function NameCard({ data }) {
  const [isChanged, setIsChanged] = useState(false);
  const [updateData, setUpdateData] = useState(data);

  useEffect(() => {
    // You can add additional logic here if needed
    setUpdateData(updateData);
  }, [updateData]);

  const getUpdateData = (data) => {
    const fetchItems = async () => {
      const patchData = {
        ...data,
        servedDate: new Date().toLocaleDateString(),
      };
      
      try {
        console.log("🚀 ~ file: NameCard.jsx:35 ~ patchData:", patchData);
        const response = await fetch(
          `${process.env.REACT_APP_API_PORT}/client/update/${patchData._id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(patchData),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Assuming the response contains the updated data, you can get it if needed
        const updatedData = await response.json();
        setUpdateData(updatedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchItems();
  };

  // const newDate = new Date().toLocaleDateString().toString();

  console.log(updateData);

  return (
    <div style={container}>
      <div style={item}>
        <h3 style={{ fontWeight: "normal" }}>Name:</h3>
        <h3> {updateData.name}</h3>
      </div>
      <div style={item}>
        <h3 style={{ fontWeight: "normal" }}>Address:</h3>
        <h3> {updateData.address}</h3>
      </div>
      <div style={item}>
        <h3 style={{ fontWeight: "normal" }}>last served:</h3>
        <h3> {updateData.servedDate}</h3>
        {/* <h3> {isChanged ? "2023-09-30"  : updateData.servedDate}</h3> */}
      </div>
      <div style={item}>
        <h3 style={{ fontWeight: "normal" }}>Family mount:</h3>
        <h3> {updateData.FamilyMount}</h3>
      </div>
      <CheckinBTN
        data={data}
        onClick={getUpdateData}
        // onUpdate={refreshCard}
      />
      {/* <button style={item}>
        Check in
      </button> */}
    </div>
  );
}

export default NameCard;
