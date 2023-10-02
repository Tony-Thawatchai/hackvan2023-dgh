import React, { useState } from "react";
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

const initialFamilyMember = {
  idType: "",
  idNumber: "",
  birthYear: "",
  sex: "",
};

const   FormComponent = ({ onSubmit }) => {
  const navigate = useNavigate();
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
  const [familyAmount, setFamilyAmount] = useState(0);
  const [householdData, setHouseholdData] = useState({
    address: "",
    postalCode: "",
    community: "",
    weekGroup: "",
    numMouths: "",
    completed: false,
    notes: "",
  });
  const [familyMembers, setFamilyMembers] = useState([
    { idType: "", idNumber: "", birthYear: "", sex: "" },
  ]);
  const handleSubmit = (e) => {
    
    e.preventDefault();

    // Construct the form data object
    const formData = {
      primaryContact,
      householdData,
    };

    onSubmit(formData);
    console.log(formData);
  };

  const handlePrimaryContactChange = (field, value) => {
    setPrimaryContact({ ...primaryContact, [field]: value });
  };
  const handlePrimaryHouseholdData = (field, value) => {
    setHouseholdData({ ...householdData, [field]: value });
  };

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

  return (
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
        Primary Contact
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

      <TextField
        sx={{
          fontFamily: '"Proxima Nova", "-apple-system", "BlinkMacSystemFont"',
          backgroundColor: "#F5F5F5",
        }}
        label="Phone"
        value={primaryContact.phone}
        onChange={(e) => handlePrimaryContactChange("phone", e.target.value)}
        fullWidth
      />
      <TextField
        sx={{
          fontFamily: '"Proxima Nova", "-apple-system", "BlinkMacSystemFont"',
          backgroundColor: "#F5F5F5",
        }}
        label="Address"
        value={householdData.address}
        onChange={(e) => handlePrimaryHouseholdData("address", e.target.value)}
        fullWidth
        type="tel"
      />
      <FormControl fullWidth>
        <InputLabel>Community</InputLabel>
        <Select
          sx={{ backgroundColor: "#F5F5F5" }}
          value={primaryContact.community}
          onChange={(e) =>
            handlePrimaryHouseholdData("community", e.target.value)
          }
        >
          <MenuItem value="Edmond">Edmond</MenuItem>
          <MenuItem value="Burnaby">Burnaby</MenuItem>
          <MenuItem value="New Westminister">New Westminister</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
          {/* <MenuItem value="Other">Other</MenuItem> */}
        </Select>
      </FormControl>

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
        label="Native language"
        // value={primaryContact.yearOfBirth}
        // onChange={(e) =>
        //   handlePrimaryContactChange("yearOfBirth", e.target.value)
        // }
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

      <Typography variant="h5" sx={{ textAlign: "center", marginTop: "3rem" }}>
        Has dependant?
      </Typography>
      <TextField
        sx={{
          fontFamily: '"Proxima Nova", "-apple-system", "BlinkMacSystemFont"',
          backgroundColor: "#F5F5F5",
        }}
        label="Family Mounths"
        value={householdData.numMouths}
        onChange={(e) => {
          handlePrimaryHouseholdData("numMouths", e.target.value);
          setFamilyAmount(e.target.value);
        }}
        fullWidth
      />

      <FormControl fullWidth>
        <InputLabel>Week Group</InputLabel>
        <Select
          sx={{ backgroundColor: "#F5F5F5" }}
          value={householdData.weekGroup}
          onChange={(e) =>
            handlePrimaryHouseholdData("weekGroup", e.target.value)
          }
        >
          <MenuItem value="Orange">Orange</MenuItem>
          <MenuItem value="Black">Black</MenuItem>
          <MenuItem value="Yellow">Yellow</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel>Document completed for all dependant?</InputLabel>
        <Select
          sx={{ backgroundColor: "#F5F5F5" }}
          value={primaryContact.community}
          onChange={(e) =>
            handlePrimaryHouseholdData("completed", e.target.value)
          }
        >
          <MenuItem value={false}>Incomplete</MenuItem>
          <MenuItem value={true}>Complete</MenuItem>
          {/* <MenuItem value="Other">Other</MenuItem> */}
        </Select>
      </FormControl>

      {/* <Typography variant="h5">Family Members</Typography> */}
      {/* {familyMembers.map((familyMember, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>ID type</InputLabel>
              <Select
              sx={{backgroundColor: "#F5F5F5"}}
                value={familyMember.idType}
                onChange={(e) =>
                  handleFamilyMemberChange(index, "idType", e.target.value)
                }
              >
                <MenuItem value="BCID">BCID</MenuItem>
                <MenuItem value="Drivers License">Drivers License</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
            sx={{
          fontFamily: '"Proxima Nova", "-apple-system", "BlinkMacSystemFont"',
          backgroundColor: "#F5F5F5",
        }}
              label="ID last 4 digits"
              value={familyMember.idNumber}
              onChange={(e) =>
                handleFamilyMemberChange(index, "idNumber", e.target.value)
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
            sx={{
          fontFamily: '"Proxima Nova", "-apple-system", "BlinkMacSystemFont"',
          backgroundColor: "#F5F5F5",
        }}
              label="Birth Year"
              value={familyMember.birthYear}
              onChange={(e) =>
                handleFamilyMemberChange(index, "birthYear", e.target.value)
              }
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>Sex</InputLabel>
              <Select
              sx={{backgroundColor: "#F5F5F5"}}
                value={familyMember.sex}
                onChange={(e) =>
                  handleFamilyMemberChange(index, "sex", e.target.value)
                }
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      ))} */}

      {/* <IconButton color="primary" onClick={handleAddFamilyMember}>
        <Typography variant="body1">+</Typography>
      </IconButton> */}
      {familyAmount == 0 && (
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
          Submit
        </Button>
      )}
      {familyAmount == 1 && (
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
          // onClick to submit form
          onClick={handleSubmit}
        >
          Submit
        </Button>
      )}
      {familyAmount > 1 && (
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
          // onClick to add dependant
          onClick={() => {
            handleSubmit
            navigate("/addDepedant")
          }}
        >
          Next
        </Button>
      )}
      
    </form>
  );
};

export default FormComponent;
