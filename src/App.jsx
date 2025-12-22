import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import { About, Academics, Admissions, StudentLife } from './pages/Placeholders';
import Contact from './pages/Contact';
import RTI from './pages/RTI';
import AntiRagging from './pages/AntiRagging';
import ICC from './pages/ICC';
import GrievanceRedressal from './pages/GrievanceRedressal';
import NIRF from './pages/NIRF';
import Gallery from './pages/Gallery';
import AdministrationPage from './pages/Administration';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="administration" element={<AdministrationPage />} />
        <Route path="academics" element={<Academics />} />
        <Route path="admissions" element={<Admissions />} />
        <Route path="student-life" element={<StudentLife />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />

        {/* Mandatory Disclosures */}
        <Route path="rti" element={<RTI />} />
        <Route path="anti-ragging" element={<AntiRagging />} />
        <Route path="icc" element={<ICC />} />
        <Route path="grievance-redressal" element={<GrievanceRedressal />} />
        <Route path="nirf" element={<NIRF />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
