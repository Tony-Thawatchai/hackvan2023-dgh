import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  MenuItem,
  Button,
  Typography,
  Grid,
  IconButton,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import DependantSummary from "./DependantSummary";

const initialFamilyMember = {
  idType: "",
  idNumber: "",
  birthYear: "",
  sex: "",
};

const FormComponent = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [readyToSubmit, setReadyToSubmit] = useState(false);
  const [primaryContact, setPrimaryContact] = useState({
    //  ! receive data from the Props
    // householdId: mongoose.Schema.Types.ObjectId,
    name: "",
    sex: "",
    yearOfBirth: "",
    isDependent: false,
    dietaryRestrictions: [""],
    phone: "",
    idType: "",
    idNumber: "",
  });
  //   const [familyAmount, setFamilyAmount] = useState(0);
  const [householdData, setHouseholdData] = useState({
    address: "",
    postalCode: "",
    community: "",
    weekGroup: "",
    numMouths: "",
    completed: false,
    notes: [],
  });
  const [familyMembers, setFamilyMembers] = useState([
    { idType: "", idNumber: "", birthYear: "", sex: "" },
  ]);
  const handleSubmit = (e) => {
    setReadyToSubmit(true);
    e.preventDefault();

    // Construct the form data object
    const formData = {
      primaryContact,
      householdData,
    };

    onSubmit(formData);
  };

  useEffect(() => {}, [readyToSubmit]);
  const handlePrimaryContactChange = (field, value) => {
    
    setPrimaryContact({ ...primaryContact, [field]: value });
  };
  const handlePrimaryHouseholdData = (field, value) => {
    setHouseholdData({ ...householdData, [field]: value });
  };

  console.log("readyToSubmit"+readyToSubmit)
  // const handleFamilyMemberChange = (index, field, value) => {
  //   const updatedFamilyMembers = [...familyMembers];
  //   updatedFamilyMembers[index][field] = value;
  //   setFamilyMembers(updatedFamilyMembers);
  // };

  // const handleAddFamilyMember = () => {
  //   setFamilyMembers([
  //     ...familyMembers,
  //     { idType: "", idNumber: "", birthYear: "", sex: "" },
  //   ]);
  // };

  return readyToSubmit ? (
    <DependantSummary />
  ) : (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        width: "100%",
      }}
      onSubmit={handleSubmit}
    >
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Dependant Information
      </Typography>
      <TextField
        sx={{
          fontFamily: '"Proxima Nova", "-apple-system", "BlinkMacSystemFont"',
          backgroundColor: "#F5F5F5",
        }}
        label="Name"
        value={primaryContact.name}
        onChange={(e) => handlePrimaryContactChange("name", e.target.value)}
        fullWidth
      />
      <TextField
        sx={{
          fontFamily: '"Proxima Nova", "-apple-system", "BlinkMacSystemFont"',
          backgroundColor: "#F5F5F5",
        }}
        label="Last 4 digits of ID"
        value={primaryContact.idNumber}
        onChange={(e) => handlePrimaryContactChange("idNumber", e.target.value)}
        fullWidth
      />

      <FormControl fullWidth>
        <InputLabel>Gender</InputLabel>
        <Select
          sx={{ backgroundColor: "#F5F5F5" }}
          value={householdData.sex}
          onChange={(e) => handlePrimaryContactChange("sex", e.target.value)}
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="LGBTQ+">LGBTQ+</MenuItem>
          <MenuItem value="Not to say">Prefer not to say</MenuItem>
          {/* <MenuItem value="Other">Other</MenuItem> */}
        </Select>
      </FormControl>
      <TextField
        sx={{
          fontFamily: '"Proxima Nova", "-apple-system", "BlinkMacSystemFont"',
          backgroundColor: "#F5F5F5",
        }}
        label="Year of Birth"
        value={primaryContact.yearOfBirth}
        onChange={(e) =>
          handlePrimaryContactChange("yearOfBirth", e.target.value)
        }
        fullWidth
      />

      <TextField
        sx={{
          fontFamily: '"Proxima Nova", "-apple-system", "BlinkMacSystemFont"',

          backgroundColor: "#F5F5F5",
        }}
        label="Additional notes"
        value={householdData.notes}
        onChange={(e) => handlePrimaryContactChange("notes", e.target.value)}
        multiline
        rows={4}
        fullWidth
      />

      {primaryContact.name == "" || primaryContact.idNumber == "" ? (
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
          disabled
        >
          Add dependant
        </Button>
      ) : (
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
          onClick={handleSubmit}
        >
          Add dependant
        </Button>
      )}
    </form>
  );
};

export default FormComponent;
