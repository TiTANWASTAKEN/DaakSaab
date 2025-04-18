import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
// import About from './screens/About';
// import Contact from './screens/Contact';
// import BookAppointment from './screens/BookAppointment';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<BookAppointment />} /> */}
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} pauseOnHover theme="colored" />
    </div>
  );
}

export default App;
