import React, { useState } from 'react';

function TextBox ({ onChange}) {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setValue(value);
    onChange(value);
  };

  return (
    <form>
      <div>
        <input
          type="text"
          id="value"
          name="value"
          value={value}
          onInput={handleChange}
        />
      </div>
    </form>
  );
}

export default TextBox;

