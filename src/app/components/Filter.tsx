"use client"; 

import React from 'react';

interface FilterProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Filter: React.FC<FilterProps> = ({ category, setCategory }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  return (
    <div className="filter-container">
      <div className="filter-header">Filter by Category</div>
      <select className="filter-select" value={category} onChange={handleChange}>
        <option value="all">All Categories</option>
        <option value="men's clothing">Men&rsquo;s Clothing</option>
        <option value="women's clothing">Women&rsquo;s Clothing</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
      </select>
    </div>
  );
};

export default Filter;






