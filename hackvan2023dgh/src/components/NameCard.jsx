import React, { useEffect } from "react";
import CheckinBTN from "./CheckinBTN";
import { useState } from "react";

const container = {
  backgroundColor: "#F0F0F0",
  // backgroundColor:"gold",
  width: "80%",
  maxWidth: "900px",
  padding: "1rem",
  // border: "1px solid #000",
  borderRadius: "10px",
  display: "flex",
  // justifyContent: "space-between",
  justifyContent: "space-around",
  alignItems: "start",
  flexWrap: "wrap",
  flexDirection: "column",
  gap: "1rem",
};

const item = {
  display: "flex",
  // flexBasis: "100%",
  // maxWidth: "400px",
  flexDirection: "row",
  justifyContent: "start",
  gap: ".5rem",
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
          `${process.env.REACT_APP_API_PORT}/serveddates/create`,
          {
            method: "POST",
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
    <div 
    // value={updateData._id}
    // onClick={getUpdateData(value)} 
     style={{backgroundColor: "#F0F0F0", display:"flex", minWidth:"80%", justifyContent:"space-around"}}>
      <div style={container} >
        <div style={item}>
          <h3
            style={{
              fontWeight: "normal",
              fontSize: "clamp(1rem, 1.25rem, 2rem)",
              fontWeight: "bold",
              display: "inline",
            }}
          >
            Name: 
          </h3>
          <h3
            style={{
              fontSize: "clamp(1rem, 1.25rem, 2rem)",
              display: "inline",
            }}
          >
            {" "}
            {updateData.name || "Sam"}
          </h3>
        </div>
        <div style={item}>
          <h3
            style={{
              fontWeight: "normal",
              fontSize: "clamp(1rem, 1.25rem, 2rem)",
              fontWeight: "bold",
              display: "inline",
            }}
          >
            Address:
          </h3>
          <h3
            style={{
              fontSize: "clamp(1rem, 1.25rem, 2rem)",
              display: "inline",
            }}
          >
            {" "}
            {updateData.addres || "1234 Main St"}
          </h3>
        </div>
        <div style={item}>
          <h3
            style={{
              fontWeight: "normal",
              fontSize: "clamp(1rem, 1.25rem, 2rem)",
              fontWeight: "bold",
              display: "inline",
            }}
          >
            last served:
          </h3>
          <h3
            style={{
              fontSize: "clamp(1rem, 1.25rem, 2rem)",
              display: "inline",
            }}
          >
            {" "}
            {updateData.date || "2023-09-01"}
          </h3>
          {/* <h3> {isChanged ? "2023-09-30"  : updateData.servedDate}</h3> */}
        </div>
        <div style={item}>
          <h3
            style={{
              fontWeight: "normal",
              fontSize: "clamp(1rem, 1.25rem, 2rem)",
              fontWeight: "bold",
              display: "inline",
            }}
          >
            Family mount:
          </h3>
          <h3
            style={{
              fontSize: "clamp(1rem, 1.25rem, 2rem)",
              display: "inline",
            }}
          >
            {" "}
            {updateData.numMouths || 4}
          </h3>
        </div>
      </div>
      <CheckinBTN
        data={data}
        onClick={getUpdateData}
      />
    </div>
  );
}

export default NameCard;
