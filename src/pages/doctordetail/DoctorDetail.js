// src/pages/DoctorDetail.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppointmentForm from '../../components/AppointmentForm';

const DoctorDetail = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    // Fetch doctor details from the backend API
    fetch(`/api/doctors/${id}`)
      .then((response) => response.json())
      .then((data) => setDoctor(data));
  }, [id]);

  if (!doctor) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>{doctor.name}</h2>
      <p>Specialization: {doctor.specialization}</p>
      <p>Contact: {doctor.contact}</p>
      <AppointmentForm doctorId={doctor.id} />
    </div>
  );
};

export default DoctorDetail;
