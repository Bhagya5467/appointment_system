// src/components/DoctorCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const DoctorCard = ({ doctor }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{doctor.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {doctor.specialization}
        </h6>
        <p className="card-text">Contact: {doctor.contact}</p>
        <Link to={`/doctors/${doctor.id}`} className="card-link">
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
