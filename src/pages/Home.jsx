import React from 'react';
import { ArrowRight, BookOpen, Award, Users, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-secondary overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover opacity-20"
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="College Campus"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary to-green-900 mix-blend-multiply" />
                </div>
                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-6xl font-black text-white tracking-[0.15em] uppercase font-poppins drop-shadow-xl">
                        B.L.D. Mahavidyalaya
                    </h1>


                    <p className="mt-6 text-xl text-yellow-100 max-w-3xl">
                        Empowering the youth of rural India. Join our B.A. Civil Services program and prepare for UPSC, MPSC, and other competitive exams while you graduate.
                    </p>
                    <div className="mt-10 flex space-x-4">
                        <Link
                            to="/admissions"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-secondary bg-primary hover:bg-yellow-400 transition-colors"
                        >
                            Apply Now (Free Admission)
                        </Link>
                        <Link
                            to="/academics"
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-800 hover:bg-green-700 transition-colors"
                        >
                            Explore Courses
                        </Link>
                    </div>
                </div>
            </div>

            {/* Notices Marquee (UGC Requirement) */}
            <div className="bg-primary py-2 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded mr-4 flex-shrink-0 uppercase">
                        Latest News
                    </span>
                    <div className="whitespace-nowrap overflow-hidden w-full">
                        <div className="animate-marquee inline-block text-secondary font-medium text-sm">
                            <span className="mx-4">Admissions Open for Academic Year 2025-26.</span>
                            <span className="mx-4"> • </span>
                            <span className="mx-4">Free Coaching for UPSC/MPSC for all enrolled students.</span>
                            <span className="mx-4"> • </span>
                            <span className="mx-4">Scholarship available for OPEN/OBC/SBC/VJNT/SC/ST students.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base font-semibold text-primary tracking-wide uppercase">Why Choose Us?</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            A Pathway to Government Service
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                            We integrate competitive exam preparation directly into our B.A. curriculum.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
                        <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                                <BookOpen className="h-6 w-6" />
                            </div>
                            <h3 className="mt-4 text-lg font-medium text-gray-900">Integrated Syllabus</h3>
                            <p className="mt-2 text-base text-gray-500 text-center">
                                B.A. curriculum designed with UPSC/MPSC subjects: History, Geography, Polity, Economics, Sociology.
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                                <Users className="h-6 w-6" />
                            </div>
                            <h3 className="mt-4 text-lg font-medium text-gray-900">Expert Faculty</h3>
                            <p className="mt-2 text-base text-gray-500 text-center">
                                Guidance from retired officers, UPSC toppers, and subject matter experts.
                            </p>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-secondary text-white">
                                <Award className="h-6 w-6" />
                            </div>
                            <h3 className="mt-4 text-lg font-medium text-gray-900">100% Job Opportunities</h3>
                            <p className="mt-2 text-base text-gray-500 text-center">
                                Prepare for IAS, IPS, PSI, Railway, Bank, and other government exams while studying.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-green-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-secondary rounded-2xl shadow-xl overflow-hidden md:flex">
                        <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                            <h2 className="text-3xl font-extrabold text-white">
                                Farmer's Son to Government Officer
                            </h2>
                            <p className="mt-4 text-lg text-green-100">
                                Our mission is to ensure that students from rural backgrounds have access to the best resources to crack competitive exams.
                            </p>
                            <div className="mt-8">
                                <Link to="/contact" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-secondary bg-white hover:bg-gray-50 transition-colors">
                                    Contact Us Today
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                        <div className="md:w-1/2 bg-primary p-8 md:p-12 flex flex-col justify-center items-center text-center">
                            <h3 className="text-2xl font-bold text-secondary mb-4">Admission Benefits</h3>
                            <ul className="text-secondary space-y-2 text-left">
                                <li className="flex items-center"><Award className="h-5 w-5 mr-2" /> Free Admission (No Donation)</li>
                                <li className="flex items-center"><Award className="h-5 w-5 mr-2" /> Scholarship Support</li>
                                <li className="flex items-center"><Award className="h-5 w-5 mr-2" /> Hostel & Mess Facility</li>
                                <li className="flex items-center"><Award className="h-5 w-5 mr-2" /> Physical Training</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
