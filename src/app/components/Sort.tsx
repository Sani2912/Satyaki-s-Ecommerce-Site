import React from 'react';

interface SortProps {
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
}

const Sort: React.FC<SortProps> = ({ sortOption, setSortOption }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="sort-container">
      <div className="sort-header">Sort by Price</div>
      <select className="sort-select" value={sortOption} onChange={handleChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default Sort;
