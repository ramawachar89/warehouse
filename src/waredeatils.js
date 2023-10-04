import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editWarehouse } from '../actions/warehouseActions';

const WarehouseDetails = ({ match }) => {
  const warehouseId = parseInt(match.params.id, 10);
  const warehouse = useSelector((state) =>
    state.warehouses.find((w) => w.id === warehouseId)
  );
  const dispatch = useDispatch();

  const [editing, setEditing] = useState(false);
  const [editedWarehouse, setEditedWarehouse] = useState({ ...warehouse });

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setEditedWarehouse({ ...warehouse });
  };

  const handleSaveEdit = () => {
    // Dispatch an action to update the warehouse in the Redux store
    dispatch(editWarehouse(editedWarehouse));

    // Exit edit mode
    setEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedWarehouse({
      ...editedWarehouse,
      [name]: value,
    });
  };

  return (
    <div>
      {warehouse ? (
        <div>
          <h2>Warehouse Details</h2>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleCancelEdit}>Cancel</button>
          <button onClick={handleSaveEdit}>Save</button>
          {editing ? (
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={editedWarehouse.name}
                onChange={handleInputChange}
              />
              <label>City:</label>
              <input
                type="text"
                name="city"
                value={editedWarehouse.city}
                onChange={handleInputChange}
              />
              <label>Cluster:</label>
              <input
                type="text"
                name="cluster"
                value={editedWarehouse.cluster}
                onChange={handleInputChange}
              />
              <label>Space Available:</label>
              <input
                type="text"
                name="space_available"
                value={editedWarehouse.space_available}
                onChange={handleInputChange}
              />
              <label>Type:</label>
              <input
                type="text"
                name="type"
                value={editedWarehouse.type}
                onChange={handleInputChange}
              />
              <label>Is Registered:</label>
              <input
                type="checkbox"
                name="is_registered"
                checked={editedWarehouse.is_registered}
                onChange={handleInputChange}
              />
              <label>Is Live:</label>
              <input
                type="checkbox"
                name="is_live"
                checked={editedWarehouse.is_live}
                onChange={handleInputChange}
              />
            </div>
          ) : (
            <div>
              <p>Name: {warehouse.name}</p>
              <p>City: {warehouse.city}</p>
              <p>Cluster: {warehouse.cluster}</p>
              <p>Space Available: {warehouse.space_available}</p>
              <p>Type: {warehouse.type}</p>
              <p>Is Registered: {warehouse.is_registered ? 'Yes' : 'No'}</p>
              <p>Is Live: {warehouse.is_live ? 'Yes' : 'No'}</p>
            </div>
          )}
        </div>
      ) : (
        <div>Warehouse not found</div>
      )}
    </div>
  );
};

export default WarehouseDetails;
