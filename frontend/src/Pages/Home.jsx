import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Home.css';
import Profile from '../Assets/img.png';
import Add from '../Assets/add.png';
import View from '../Assets/view.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Employee Management System</h1>
        <p>
          Efficiently manage your company’s workforce – add, view, and update
          employee details with ease.
        </p>

        <div className="home-buttons">
          <button onClick={() => navigate('/AddEmployee')}>
            <img src={Add} alt="Add" className="icon" />
            Add Employee
          </button>
          <button onClick={() => navigate('/EmployeeList')}>
            <img src={View} alt="View" className="icon" />
            View Employees
          </button>
        </div>
      </div>

      <div className="home-image">
        <img src={Profile} alt="Welcome Illustration" />
      </div>
    </div>
  );
};

export default Home;
