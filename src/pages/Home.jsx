import React from "react";
import { ArrowRight, BookOpen, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* ================= HERO ================= */}
      <div className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/college-images/c2.jpg"
            alt="College Campus"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative max-w-7xl mx-auto py-16 sm:py-24 px-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-wide uppercase drop-shadow-xl">
            B.L.D. Mahavidyalaya
          </h1>

          <p className="mt-4 text-base sm:text-xl text-yellow-100 max-w-3xl">
            Empowering the youth of rural India. Prepare for UPSC, MPSC and other
            competitive exams while you graduate.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/admissions"
              className="px-6 py-3 text-center text-sm sm:text-base font-medium rounded-md text-secondary bg-primary hover:bg-yellow-400"
            >
              Apply Now (Free Admission)
            </Link>
            <Link
              to="/academics"
              className="px-6 py-3 text-center text-sm sm:text-base font-medium rounded-md text-white bg-green-800 hover:bg-green-700"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </div>

      {/* ================= NOTICE ================= */}
      <div className="bg-primary py-2">
        <div className="max-w-7xl mx-auto px-4 flex items-center">
          <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded mr-3 uppercase">
            Latest
          </span>
          <div className="text-secondary text-xs sm:text-sm whitespace-nowrap overflow-hidden">
            Admissions Open for 2025–26 • Free UPSC/MPSC Coaching • Scholarships Available
          </div>
        </div>
      </div>

      {/* ================= STATS COUNTER ================= */}
      <div className="bg-secondary py-12 border-t border-green-800">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <StatBox value="30+" label="Years of Excellence" />
          <StatBox value="1500+" label="Students Enrolled" />
          <StatBox value="50+" label="Qualified Faculty" />
          <StatBox value="100%" label="Commitment" />
        </div>
      </div>

      {/* ================= PRINCIPAL'S MESSAGE ================= */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
                <img
                  src="/staff/swapnil.png"
                  alt="Principal"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 pt-24">
                  <h3 className="text-white font-bold text-xl uppercase">Dr. Swapnil Deshmukh</h3>
                  <p className="text-yellow-400 text-sm font-medium">Principal</p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="inline-block px-4 py-1.5 bg-green-100 text-secondary text-xs font-bold rounded-full uppercase tracking-widest mb-4">
                Principal's Desk
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-secondary mb-6 leading-tight">
                "Nurturing Tomorrow's <span className="text-yellow-500">Leaders</span>"
              </h2>
              <blockquote className="text-lg md:text-xl text-gray-600 italic border-l-4 border-yellow-400 pl-6 mb-8">
                "Our mission is not just to provide degrees, but to shape character and capability. At B.L.D. Mahavidyalaya, we believe every student in rural India has the potential to lead. We provide the guidance, discipline, and resources to help you crack the toughest competitive exams."
              </blockquote>
              <Link to="/administration" className="text-secondary font-bold hover:text-green-800 uppercase text-sm tracking-widest border-b-2 border-yellow-400 pb-1">
                Meet Our Leadership
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FEATURES ================= */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-sm font-semibold text-primary uppercase">
              Why Choose Us?
            </h2>
            <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-900">
              A Pathway to Government Service
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Feature
              icon={<BookOpen />}
              title="Integrated Syllabus"
              text="B.A. curriculum aligned with UPSC/MPSC subjects."
            />
            <Feature
              icon={<Users />}
              title="Expert Faculty"
              text="Guidance from retired officers and subject experts."
            />
            <Feature
              icon={<Award />}
              title="Career Focus"
              text="Preparation for IAS, IPS, PSI, Banking & more."
            />
          </div>
        </div>
      </div>

      {/* ================= GALLERY ================= */}
      <div className="py-12 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-sm font-semibold text-primary uppercase">
              Campus Life
            </h2>
            <p className="mt-2 text-2xl sm:text-3xl font-extrabold text-gray-900">
              College Functions & Events
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[1, 2, 12, 14].map((num) => (
              <img
                key={num}
                src={`/college-images/c${num}.jpg`}
                alt="Event"
                className="w-full h-36 sm:h-56 object-cover rounded-lg"
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/gallery"
              className="inline-flex items-center px-6 py-3 text-sm font-medium rounded-md text-white bg-secondary hover:bg-green-800"
            >
              View All Photos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-secondary rounded-xl p-6 sm:p-10 text-center text-white">
            <h2 className="text-xl sm:text-3xl font-extrabold">
              Farmer’s Son to Government Officer
            </h2>
            <p className="mt-3 text-sm sm:text-lg text-green-100">
              We ensure rural students get the right guidance to crack
              competitive exams.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center mt-6 px-6 py-3 bg-white text-secondary font-medium rounded-md hover:bg-gray-100"
            >
              Contact Us <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

function StatBox({ value, label }) {
  return (
    <div className="p-4">
      <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">{value}</div>
      <div className="text-sm md:text-base font-medium text-green-100 uppercase tracking-wider">{label}</div>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="flex flex-col items-center p-5 bg-gray-50 rounded-lg shadow-sm">
      <div className="h-10 w-10 flex items-center justify-center bg-secondary text-white rounded-md">
        {icon}
      </div>
      <h3 className="mt-3 text-base font-semibold text-gray-900">
        {title}
      </h3>
      <p className="mt-1 text-sm text-gray-600 text-center">{text}</p>
    </div>
  );
}

export default Home;
