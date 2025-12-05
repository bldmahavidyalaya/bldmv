import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import { About, Administration, Academics, Admissions, StudentLife, RTI } from './pages/Placeholders';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="administration" element={<Administration />} />
        <Route path="academics" element={<Academics />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="student-life" element={<StudentLife />} />
        <Route path="contact" element={<Contact />} />
        <Route path="rti" element={<RTI />} />
        {/* Add other mandatory routes as needed */}
        <Route path="*" element={<div className="p-10 text-center">404 - Page Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
