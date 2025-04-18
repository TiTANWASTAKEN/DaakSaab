import React from 'react';
import NavigationBar from '../components/navbar.jsx';
import DoctorSection from '../sections/DoctorSection.js';
// import HeroSection from '../components/HeroSection';
// import FeaturedDoctors from '../components/FeaturedDoctors';
// import Footer from '../components/Footer';

const HomeScreen = () => {
  return (
    <>
      <NavigationBar />
      <main>
      <DoctorSection />
        {/* <HeroSection />
        <FeaturedDoctors /> */}
        {/* You can add more sections like Testimonials, Services, etc., here */}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default HomeScreen;
