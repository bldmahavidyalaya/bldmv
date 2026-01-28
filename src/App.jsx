import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import StudentLife from './pages/StudentLife';
import Contact from './pages/Contact';
import RTI from './pages/RTI';
import AntiRagging from './pages/AntiRagging';
import ICC from './pages/ICC';
import GrievanceRedressal from './pages/GrievanceRedressal';
import NIRF from './pages/NIRF';
import Gallery from './pages/Gallery';
import AdministrationPage from './pages/Administration';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="administration" element={<PageWrapper><AdministrationPage /></PageWrapper>} />
          <Route path="academics" element={<PageWrapper><Academics /></PageWrapper>} />
          <Route path="admissions" element={<PageWrapper><Admissions /></PageWrapper>} />
          <Route path="student-life" element={<PageWrapper><StudentLife /></PageWrapper>} />
          <Route path="contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="gallery" element={<PageWrapper><Gallery /></PageWrapper>} />

          {/* Mandatory Disclosures */}
          <Route path="rti" element={<PageWrapper><RTI /></PageWrapper>} />
          <Route path="anti-ragging" element={<PageWrapper><AntiRagging /></PageWrapper>} />
          <Route path="icc" element={<PageWrapper><ICC /></PageWrapper>} />
          <Route path="grievance-redressal" element={<PageWrapper><GrievanceRedressal /></PageWrapper>} />
          <Route path="nirf" element={<PageWrapper><NIRF /></PageWrapper>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

// Simple wrapper for page transitions
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

export default App;
