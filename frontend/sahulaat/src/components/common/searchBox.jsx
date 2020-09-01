import React from "react";

const SearchBox = ({ searchQuery, handleChange }) => {
  return (
    <input
      value={searchQuery}
      onChange={handleChange}
      id="SearchQuery"
      name="SearchQuery"
      className="w-full px-4 py-2 mb-4 text-base bg-white border border-gray-400 rounded shadow-lg focus:shadow-outline focus:outline-none "
      placeholder="Search by Title .."
      type="text"
    />
  );
};

export default SearchBox;
