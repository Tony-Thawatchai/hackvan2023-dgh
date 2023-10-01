import React, { useState } from 'react';
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
} from '@mui/material';

const initialFamilyMember = {
  idType: '',
  idNumber: '',
  birthYear: '',
  sex: '',
};

const FormComponent = ({ onSubmit }) => {
  const [primaryContact, setPrimaryContact] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    community: '',
  });
  const [familyMembers, setFamilyMembers] = useState([{ idType: '', idNumber: '', birthYear: '', sex: ''}]);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the form data object
    const formData = {
      primaryContact,
      familyMembers,
    };

    onSubmit(formData);
  }

  const handlePrimaryContactChange = (field, value) => {
    setPrimaryContact({ ...primaryContact, [field]: value });
  };

  const handleFamilyMemberChange = (index, field, value) => {
    const updatedFamilyMembers = [...familyMembers];
    updatedFamilyMembers[index][field] = value;
    setFamilyMembers(updatedFamilyMembers);
  };

  const handleAddFamilyMember = () => {
    setFamilyMembers([...familyMembers, { idType: '', idNumber: '', birthYear: '', sex: ''}]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5">Primary Contact Information</Typography>
      <TextField
        label="Primary contact Name"
        value={primaryContact.name}
        onChange={(e) => handlePrimaryContactChange('name', e.target.value)}
        fullWidth
      />
      <TextField
        label="Primary contact Phone Number"
        value={primaryContact.phoneNumber}
        onChange={(e) => handlePrimaryContactChange('phoneNumber', e.target.value)}
        fullWidth
        type="tel"
      />
      <TextField
        label="Address"
        value={primaryContact.address}
        onChange={(e) => handlePrimaryContactChange('address', e.target.value)}
        fullWidth
      />
      <FormControl fullWidth>
        <InputLabel>Community</InputLabel>
        <Select
          value={primaryContact.community}
          onChange={(e) => handlePrimaryContactChange('community', e.target.value)}
        >
          <MenuItem value="Edmonds">Edmonds</MenuItem>
          <MenuItem value="Burnaby">Burnaby</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="h5">Family Members</Typography>
      {familyMembers.map((familyMember, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>ID type</InputLabel>
              <Select
                value={familyMember.idType}
                onChange={(e) => handleFamilyMemberChange(index, 'idType', e.target.value)}
              >
                <MenuItem value="BCID">BCID</MenuItem>
                <MenuItem value="Drivers License">Drivers License</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="ID last 4 digits"
              value={familyMember.idNumber}
              onChange={(e) => handleFamilyMemberChange(index, 'idNumber', e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="Birth Year"
              value={familyMember.birthYear}
              onChange={(e) => handleFamilyMemberChange(index, 'birthYear', e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel>Sex</InputLabel>
              <Select
                value={familyMember.sex}
                onChange={(e) => handleFamilyMemberChange(index, 'sex', e.target.value)}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      ))}

      <IconButton color="primary" onClick={handleAddFamilyMember}>
        <Typography variant="body1">+</Typography>
      </IconButton>

      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
};

export default FormComponent;

