import React from 'react';
import EmployeeForm from '../Components/EmployeeForm';
import { addEmployee } from '../Services/EmployeeService';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    await addEmployee(formData);
    navigate('/EmployeeList');
  };

  return (
    <div>
      <h2>Add New Employee</h2>
      <EmployeeForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddEmployee;
