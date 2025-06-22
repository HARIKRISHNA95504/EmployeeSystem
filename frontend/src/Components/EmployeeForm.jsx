import React, { useState, useEffect } from 'react';
import '../Styles/EmployeeForm.css';


const EmployeeForm = ({ onSubmit,initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    position: '',
    salary: '',
    hireDate: '',
    status: 'Active',
  });

 useEffect(() => {
  if (initialData) {
    setFormData((prev) => ({
      ...prev,
      ...initialData,
    }));
  }
}, [initialData]) // ✅ use 'data' in dependency

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
      <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} />
      <input type="text" name="position" placeholder="Position" value={formData.position} onChange={handleChange} />
      <input type="number" name="salary" placeholder="Salary" value={formData.salary} onChange={handleChange} />
      <input type="date" name="hireDate" value={formData.hireDate ? formData.hireDate.slice(0, 10) : ''} onChange={handleChange} />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Active">Active</option>
        <option value="On Leave">On Leave</option>
        <option value="Resigned">Resigned</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;
