import { SEARCH_WAREHOUSES, FILTER_WAREHOUSES, EDIT_WAREHOUSE}  from "./types";
export const searchWarehouses = (searchQuery) => ({
  type: SEARCH_WAREHOUSES,
  payload: searchQuery,
});

export const filterWarehouses = (filters) => ({
  type: FILTER_WAREHOUSES,
  payload: filters,
});

export const editWarehouse = (updatedWarehouse) => ({
  type: EDIT_WAREHOUSE,
  payload: updatedWarehouse,
});