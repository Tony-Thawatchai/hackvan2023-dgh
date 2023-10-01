import React, { useState } from "react";
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
import { Unstable_NumberInput as NumberInput } from "@mui/base/Unstable_NumberInput";

const initialFamilyMember = {
  idType: "",
  idNumber: "",
  birthYear: "",
  sex: "",
};

const FormComponent = ({ onSubmit }) => {
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
    notes: [],
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
      <Typography variant="h5" sx={{textAlign:"center"}}>Primary Contact</Typography>
      <TextField
        sx={{
          fontFamily: '"Proxima Nova", "-apple-system", "BlinkMacSystemFont"',
        }}
        label="Name"
        value={primaryContact.name}
        onChange={(e) => handlePrimaryContactChange("name", e.target.value)}
        fullWidth
      />
      <TextField
        sx={{
          fontFamily: '"Proxima Nova", "-apple-system", "BlinkMacSystemFont"',
        }}
        label="Last 4 digits of ID"
        value={primaryContact.idNumber}
        onChange={(e) => handlePrimaryContactChange("idNumber", e.target.value)}
        fullWidth
      />

      <TextField
        sx={{
          fontFamily: '"Proxima Nova", "-apple-system", "BlinkMacSystemFont"',
        }}
        label="Phone"
        value={primaryContact.phone}
        onChange={(e) => handlePrimaryContactChange("phone", e.target.value)}
        fullWidth
      />
      <TextField
        sx={{
          fontFamily: '"Proxima Nova", "-apple-system", "BlinkMacSystemFont"',
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
        }}
        label="Family Mounths"
        value={householdData.numMouths}
        onChange={(e) =>
          handlePrimaryHouseholdData("numMouths", e.target.value)
        }
        fullWidth
      />

      <FormControl fullWidth>
        <InputLabel>Week Group</InputLabel>
        <Select
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

      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default FormComponent;
