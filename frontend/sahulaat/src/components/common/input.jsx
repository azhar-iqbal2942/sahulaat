import React from "react";

const Input = ({ name, type = "text", placeholder = "Input", onChange, ...rest }) => {
  return (
    <input
      id={name}
      name={name}
      className="w-full px-4 py-2 mx-6 mb-4 text-base bg-white border border-gray-400 rounded lg:max-w-full focus:outline-none focus:border-gray-600"
      placeholder={placeholder}
      type={type}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default Input;
