import React from "react";
import { useNavigate } from "react-router-dom";

function SuccessModal() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        background: "#3FD2A0",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <div style={{ height: "50%" }}>
        Update Successful All changes saved to client’s profile.
      </div>
      <br />
      <button
        style={{
          textDecoration: "underline",
          color: "white",
          background: "none",
          border: "none",
        }}
        onClick={() => navigate("/volunteerhome")}
      >
        X close
      </button>
    </div>
  );
}

export default SuccessModal;
