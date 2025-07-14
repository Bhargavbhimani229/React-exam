import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute><StudentList /></PrivateRoute>} />
          <Route path="/add" element={<PrivateRoute><StudentForm /></PrivateRoute>} />
          <Route path="/edit/:id" element={<PrivateRoute><StudentForm /></PrivateRoute>} />
          <Route path="/student/:id" element={<PrivateRoute><StudentDetails /></PrivateRoute>} />
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;