import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, BookOpen, GraduationCap } from 'lucide-react';

const AdministrationPage = () => {
  const administrationData = [
    { srNo: 1, name: "SWAPNIL BAPUSAHEB DESHMUKH", designation: "PRINCIPAL", subject: "ENGLISH", image: "/staff/swapnil.png" },
    { srNo: 2, name: "AJAY BAPUSAHEB DESHMUKH", designation: "TEACHER", subject: "SOCIOLOGY", image: "/staff/ajay.png" },
    { srNo: 3, name: "BHARAT DEVIDAS RATHOD", designation: "TEACHER", subject: "GEOGRAPHY", image: "/staff/bharat.png" },
    { srNo: 4, name: "RAHUL VISHWAS MORE", designation: "TEACHER", subject: "ECONOMICS", image: "/staff/rahul.png" },
    { srNo: 5, name: "SHANKAR ANNASAHEB BOBADE", designation: "TEACHER", subject: "POLITICAL SCIENCE", image: null },
    { srNo: 6, name: "VIJAY BAPUSAHEB DESHMUKH", designation: "TEACHER", subject: "HISTORY", image: "/staff/vijay.png" },
    { srNo: 7, name: "YOGITA CHANDRAKANT KAPSE", designation: "TEACHER", subject: "LIBRARIAN", image: "/staff/yogita.png" },
    { srNo: 8, name: "AMOL MAHADEV KADAM", designation: "TEACHER", subject: "SANSKRIT", image: "/staff/amol.png" },
    { srNo: 9, name: "RAHUL SHANKARRAO GHATE", designation: "CLERK", subject: "--", image: "/staff/rahul_ghate.png" },
    { srNo: 10, name: "VIKAS PREMSING RATHOD", designation: "TEACHER", subject: "MATHEMATICS", image: "/staff/vikas.png" },
    { srNo: 11, name: "SAGAR MOTIRAM SHIRSATH", designation: "TEACHER", subject: "PHYSICAL EDUCATION TEACHER", image: "/staff/sagar.png" },
    { srNo: 12, name: "SAMARTH NANA BHAGURE", designation: "COMPUTER OPERATOR", subject: "--", image: "/staff/samarth.png" },
    { srNo: 13, name: "TEJAS PRAVIN CHAVAN", designation: "PEON", subject: "--", image: "/staff/tejas.png" }
  ];

  const getByRole = (role) => administrationData.filter(p => p.designation === role);

  // Variants for stagger animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const SectionHeading = ({ title, icon: Icon }) => (
    <div className="flex items-center justify-center my-12 relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-200"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="px-4 bg-gray-50 text-xl md:text-2xl font-black text-secondary uppercase tracking-widest flex items-center gap-3">
          {Icon && <Icon className="text-yellow-500 w-6 h-6" />}
          {title}
        </span>
      </div>
    </div>
  );

  const StaffCard = ({ person }) => (
    <motion.div
      variants={itemVariants}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-full flex flex-col"
    >
      <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-secondary to-green-400 group-hover:h-2 transition-all duration-300"></div>

      <div className="pt-8 pb-4 px-6 flex flex-col items-center flex-1">
        <div className="relative mb-6">
          <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg group-hover:scale-105 transition-transform duration-500">
            <img
              src={person.image || `https://ui-avatars.com/api/?name=${person.name}&background=166534&color=fff&size=512&bold=true`}
              alt={person.name}
              className="w-full h-full object-cover rounded-full border-4 border-white"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md whitespace-nowrap">
            {person.designation}
          </div>
        </div>

        <h3 className="text-sm font-black text-gray-800 text-center uppercase leading-tight mb-2 group-hover:text-secondary transition-colors line-clamp-2 min-h-[2.5em] flex items-center justify-center">
          {person.name}
        </h3>

        {person.subject !== '--' && (
          <div className="mt-auto w-full pt-4 border-t border-gray-50">
            <p className="text-xs text-center text-gray-500 font-medium flex items-center justify-center gap-1">
              <BookOpen size={12} className="text-yellow-500" />
              {person.subject}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );

  const PrincipalCard = ({ person }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border-t-8 border-secondary max-w-4xl mx-auto overflow-hidden group"
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 p-8 opacity-5">
        <Award size={200} />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
        <div className="relative">
          <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-2xl ring-4 ring-yellow-400 ring-offset-4 ring-offset-white rotate-3 group-hover:rotate-0 transition-transform duration-500">
            <img
              src={person.image || `https://ui-avatars.com/api/?name=${person.name}&background=166534&color=fff&size=512&bold=true`}
              alt={person.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <div className="inline-block px-4 py-1.5 bg-yellow-100 text-yellow-800 text-xs font-bold rounded-full uppercase tracking-widest mb-4">
            Leadership
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-secondary leading-tight mb-2 uppercase">
            {person.name}
          </h2>
          <h3 className="text-xl md:text-2xl font-bold text-gray-600 mb-6 font-serif italic">
            {person.designation}
          </h3>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-100">
              <GraduationCap className="text-secondary" size={20} />
              <span className="text-sm font-bold text-gray-700">{person.subject}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header / Hero */}
      <div className="relative bg-secondary py-20 px-4 mb-16 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400 opacity-5 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-4 drop-shadow-md"
          >
            Administrative <span className="text-yellow-400">Structure</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-green-100 text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            Building the future with dedicated leadership and academic excellence.
          </motion.p>
        </div>
      </div>

      <main className="container mx-auto px-4 pb-24 space-y-20">

        {/* 1. PRINCIPAL */}
        <section>
          {getByRole('PRINCIPAL').map((person) => (
            <PrincipalCard key={person.srNo} person={person} />
          ))}
        </section>

        {/* 2. ADMINISTRATION */}
        <section>
          <SectionHeading title="Administration" icon={User} />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {getByRole('CLERK').map(person => <StaffCard key={person.srNo} person={person} />)}
          </motion.div>
        </section>

        {/* 3. FACULTY */}
        <section>
          <SectionHeading title="Faculty" icon={GraduationCap} />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
          >
            {getByRole('TEACHER').map(person => <StaffCard key={person.srNo} person={person} />)}
          </motion.div>
        </section>

        {/* 4. SUPPORT STAFF */}
        <section>
          <SectionHeading title="Support Team" icon={User} />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {getByRole('COMPUTER OPERATOR').map(person => <StaffCard key={person.srNo} person={person} />)}
            {getByRole('PEON').map(person => <StaffCard key={person.srNo} person={person} />)}
          </motion.div>
        </section>

      </main>
    </div>
  );
};

export default AdministrationPage;