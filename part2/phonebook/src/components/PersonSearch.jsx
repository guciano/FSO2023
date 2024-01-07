import React from 'react';

const PersonSearch = ({ searchTerm, handleSearch }) => {
  return (
    <div>
        filter shown with <input
      type="text"
      placeholder="Search by name"
      value={searchTerm}
      onChange={handleSearch}
    />
    </div>
  );
};

export default PersonSearch;