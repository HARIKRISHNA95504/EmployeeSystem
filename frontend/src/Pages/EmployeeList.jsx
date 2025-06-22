import React, { useEffect, useState } from 'react';
import { getAllEmployees, deleteEmployee } from '../Services/EmployeeService';
import '../Styles/EmployeeList.css';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  const fetchData = async () => {
    const data = await getAllEmployees();
    setEmployees(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    fetchData(); 
  };

  return (
    <div className="employee-list">
      <h2>All Employees</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th><th>Email</th><th>Phone</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>
                <button onClick={() => window.location.href=`/edit/${emp._id}`}>Edit</button>
                <button onClick={() => handleDelete(emp._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
