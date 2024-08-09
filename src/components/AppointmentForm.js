// src/components/AppointmentForm.js
import React, { useState } from 'react';

const AppointmentForm = ({ doctorId }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle appointment booking logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Time</label>
        <input
          type="time"
          className="form-control"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Book Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
