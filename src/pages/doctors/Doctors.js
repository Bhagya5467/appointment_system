// src/pages/Doctors.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Doctors.css';

const categories = [
  { name: 'Cardiologists', path: '/doctors/cardiologists' },
  { name: 'Dermatologists', path: '/doctors/dermatologists' },
  { name: 'Neurologists', path: '/doctors/neurologists' },
  {
    name: 'Obstetrician and Gynecologists',
    path: '/doctors/obstetrician-gynecologists',
  },
  { name: 'Oncologists', path: '/doctors/oncologists' },
  { name: 'Ophthalmologists', path: '/doctors/ophthalmologists' },
  { name: 'Endocrinologists', path: '/doctors/endocrinologists' },
  { name: 'Nephrologists', path: '/doctors/nephrologists' },
  { name: 'Psychiatrists', path: '/doctors/psychiatrists' },
];

const Doctors = () => {
  return (
    <div className="doctors-page">
      <h1>Our Doctors</h1>
      <div className="categories-list">
        {categories.map((category, index) => (
          <Link to={category.path} key={index} className="category-box">
            <div className="category-content">
              <h3>{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
