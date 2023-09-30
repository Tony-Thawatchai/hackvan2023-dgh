import React from "react";


const container = {
  width: "80%",
  maxWidth: "900px",
  border: "1px solid #000",
  borderRadius: "10px",
  display: "flex",
  justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    gap : "1rem",

};

const item = {
    flex: 1,
    flexBasis: "25%",
    // backgroundColor: "hotpink",
    

}

function NameCard({ data }) {
  return (
    <div style={container}>
      <div style={item}>
        <h3 style={{ fontWeight: "normal" }}>Name:</h3>
        <h3> {data.name}</h3>
      </div>
      <div style={item}>
        <h3 style={{ fontWeight: "normal" }}>Address:</h3>
        <h3> {data.address}</h3>
      </div>
      <div style={item}>
        <h3 style={{ fontWeight: "normal" }}>last served:</h3>
        <h3> {data.servedDate}</h3>
      </div>
      <div style={item}>
        <h3 style={{ fontWeight: "normal" }}>Family mount:</h3>
        <h3> {data.FamilyMount}</h3>
      </div>
      <button style={item}>
        Check in
      </button>
    </div>
  );
}

export default NameCard;
