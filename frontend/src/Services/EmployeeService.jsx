import axios from 'axios'
const BASE_URL = 'http://localhost:4000/employees';

export const getAllEmployees = async () => {
  const res = await axios.get(BASE_URL);
  return res.data.data;
};

export const getEmployeeById = async (id) => {
  const res = await axios.get(`${BASE_URL}/${id}`);
  return res.data.data;
};

export const addEmployee = async (employee) => {
  return await axios.post(BASE_URL, employee);
};

export const updateEmployee = async (id, employee) => {
  return await axios.put(`${BASE_URL}/${id}`, employee);
};

export const deleteEmployee = async (id) => {
  return await axios.delete(`${BASE_URL}/${id}`);
};