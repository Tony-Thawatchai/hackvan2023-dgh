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

const FormComponent = () => {
  const [primaryContact, setPrimaryContact] = useState({
    name: '',
    phoneNumber: '',
    address: '',
    community: '',
  });
  const [familyMembers, setFamilyMembers] = useState([initialFamilyMember]);

  const handlePrimaryContactChange = (field, value) => {
    setPrimaryContact({ ...primaryContact, [field]: value });
  };

  const handleFamilyMemberChange = (index, field, value) => {
    const updatedFamilyMembers = [...familyMembers];
    updatedFamilyMembers[index][field] = value;
    setFamilyMembers(updatedFamilyMembers);
  };

  const handleAddFamilyMember = () => {
    setFamilyMembers([...familyMembers, initialFamilyMember]);
  };

  return (
    <form>
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
          <MenuItem value="Community A">Community A</MenuItem>
          <MenuItem value="Community B">Community B</MenuItem>
          <MenuItem value="Community C">Community C</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="h5">Family Members</Typography>
      {familyMembers.map((familyMember, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={3}>
            <TextField
              label="ID type"
              value={familyMember.idType}
              onChange={(e) => handleFamilyMemberChange(index, 'idType', e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              label="ID number"
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
