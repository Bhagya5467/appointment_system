// src/pages/CategoryDoctors.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './CategoryDoctors.css';

const CategoryDoctors = () => {
  const { category } = useParams();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(`/api/doctors?category=${category}`);
        setDoctors(response.data.doctors);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, [category]);

  return (
    <div className="category-doctors-page">
      <h1>{category.replace(/-/g, ' ')}</h1>
      <div className="doctors-list">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <h3>{doctor.name}</h3>
            <p>Specialty: {doctor.specialty}</p>
            <p>Location: {doctor.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryDoctors;
