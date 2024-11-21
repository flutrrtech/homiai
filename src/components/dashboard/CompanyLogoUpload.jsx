import React, { useState } from 'react';

const CompanyLogoUpload = () => {
  const [logo, setLogo] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setLogo(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logo upload logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="file" 
        accept="image/*"
        onChange={handleFileUpload}
      />
      {logo && <img src={URL.createObjectURL(logo)} alt="Preview" />}
      <button type="submit">Upload Logo</button>
    </form>
  );
};

export default CompanyLogoUpload;