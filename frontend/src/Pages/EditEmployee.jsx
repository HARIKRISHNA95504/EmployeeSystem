import React, { useEffect, useState } from 'react';
import EmployeeForm from '../Components/EmployeeForm';
import { getEmployeeById, updateEmployee } from '../Services/EmployeeService';
import { useParams, useNavigate } from 'react-router-dom';

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
  const fetchData = async () => {
    try {
      const employee = await getEmployeeById(id);
      setInitialData(employee); // ✅ NO .data here
    } catch (error) {
      console.error('Failed to load employee:', error);
    }
  };
  fetchData();
}, [id]);


  const handleSubmit = async (formData) => {
    try {
      await updateEmployee(id, formData);
      navigate('/EmployeeList');
    } catch (error) {
      console.error('Failed to update employee:', error);
    }
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      {initialData ? (
        <EmployeeForm onSubmit={handleSubmit} initialData={initialData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditEmployee;
