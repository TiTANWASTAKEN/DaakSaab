import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({ image, name, specialty }) => {
  return (
    <div className="doctor-card">
      <img src={image} alt={name} className="doctor-image" />
      <h3 className="doctor-name">{name}</h3>
      <p className="doctor-specialty">{specialty}</p>
      <button className="book-btn">Book Appointment</button>
    </div>
  );
};

export default DoctorCard;