import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchWarehouses,filterWarehouses } from './redux/action';

const WarehouseListing = () => {
  const warehouses = useSelector((state) => state.filteredWarehouses);
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    city: '',
    cluster: '',
    spaceAvailable: '',
  });

  const handleSearch = () => {
    dispatch(searchWarehouses(searchQuery));
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleFilter = () => {
    dispatch(filterWarehouses(filters));
  };

  return (
    <div>
      {/* Search input */}
      <div>
        <input
          type="text"
          placeholder="Search by warehouse name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Filter options */}
      <div>
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={filters.city}
          onChange={handleFilterChange}
        />

        <label>Cluster:</label>
        <input
          type="text"
          name="cluster"
          value={filters.cluster}
          onChange={handleFilterChange}
        />

        <label>Space Available:</label>
        <input
          type="text"
          name="spaceAvailable"
          value={filters.spaceAvailable}
          onChange={handleFilterChange}
        />

        <button onClick={handleFilter}>Filter</button>
      </div>

      {/* Warehouse listing */}
      <ul>
        {warehouses.map((warehouse) => (
          <li key={warehouse.id}>
            <p>Name: {warehouse.name}</p>
            <p>City: {warehouse.city}</p>
            <p>Cluster: {warehouse.cluster}</p>
            <p>Space Available: {warehouse.space_available}</p>
            <p>Type: {warehouse.type}</p>
            <p>Is Registered: {warehouse.is_registered ? 'Yes' : 'No'}</p>
            <p>Is Live: {warehouse.is_live ? 'Yes' : 'No'}</p>
            {/* Implement a link to the details page */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WarehouseListing;
