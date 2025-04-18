import React from 'react';
import DoctorCard from '../components/DoctorCard';
import './DoctorSection.css';

const DoctorSection = () => {
  return (
    <div className="doctor-section">
      <h2>Meet Our Doctors</h2>
      <div className="doctor-card-container">
        <DoctorCard 
          image="https://i.pravatar.cc/150?img=32" 
          name="Dr. Aisha Mehra" 
          specialty="Cardiologist" 
        />
        <DoctorCard 
          image="https://i.pravatar.cc/150?img=15" 
          name="Dr. Rahul Kapoor" 
          specialty="Dermatologist" 
        />
      </div>
    </div>
  );
};

export default DoctorSection;
