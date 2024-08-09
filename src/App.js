import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import Doctors from './pages/doctors/Doctors';
import DoctorDetail from './pages/doctordetail/DoctorDetail';
import BookAppointment from './pages/bookappointment/BookAppointment';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Dashboard from './pages/dashboard/Dashboard';
import CategoryDoctors from './pages/categorydoctors/CategoryDoctors';
import './App.css'; 

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:id" element={<DoctorDetail />} />
          <Route path="/book-appointment" component={BookAppointment} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doctors/:category" component={CategoryDoctors} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
