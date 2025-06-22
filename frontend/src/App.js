import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import EmployeeList from '../src/Pages/EmployeeList';
import AddEmployee from './Pages/AddEmployee';
import EditEmployee from './Pages/EditEmployee';
function App() {
  return (
    <div>
     <Router>
         <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/EmployeeList' element={<EmployeeList/>}></Route>
            <Route path="/AddEmployee" element={<AddEmployee />} />
            <Route path="/edit/:id" element={<EditEmployee />} />

          </Routes>
     </Router>
    </div>
  );
}

export default App;
