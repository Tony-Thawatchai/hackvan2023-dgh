import React, { useState } from 'react';
import FormComponent from './components/FormComponent';

function FormLayout(props) {
  const [formData, setFormData] = useState({
    household: {
      name: '',
      phoneNumber: '',
      address: '',
      community: '',
    },
    familyMembers: [],
  });

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div className="form-layout">
      // {props.children}
      <FormComponent onSubmit={handleFormSubmit} />
    </div>
  );
}

export default FormLayout;

