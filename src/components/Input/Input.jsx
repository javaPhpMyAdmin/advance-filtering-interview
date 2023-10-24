import React from 'react';

export default function Input() {
  const handleChange = () => {};

  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" name="test2" />
      <span className="checkmark"></span>All
    </label>
  );
}
