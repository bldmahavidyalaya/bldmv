import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Section = ({ title, children, className = "" }) => (
    <section className={`py-12 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-green-600 pl-4">{title}</h2>
                {children}
            </motion.div>
        </div>
    </section>
);

const Card = ({ title, description, image, link, linkText }) => (
    <motion.div
        className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
        whileHover={{ y: -5 }}
    >
        {image && (
            <div className="h-48 overflow-hidden">
                <img src={image} alt={title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500" />
            </div>
        )}
        <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 mb-4 flex-1">{description}</p>
            {link && (
                <Link to={link} className="text-green-700 font-semibold hover:text-green-900 inline-flex items-center mt-auto">
                    {linkText || "Learn More"} &rarr;
                </Link>
            )}
        </div>
    </motion.div>
);

const StudentLife = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[400px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <img
                    src="/college-images/c13.jpg"
                    alt="Student Life Campus"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 shadow-sm">Student Life</h1>
                        <p className="text-xl text-gray-200 max-w-2xl mx-auto shadow-sm">
                            Discover the vibrant community, activities, and support systems that make our college experience unique.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Facilities Grid */}
            <Section title="Campus Facilities & Activities">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card
                        title="Sports Facilities"
                        description="Our college provides excellent sports infrastructure including a spacious playground, holistic development, and regular inter-college tournaments to foster team spirit and fitness."
                        image="/college-images/c2.jpg"
                    />
                    <Card
                        title="NCC & NSS"
                        description="Join the National Cadet Corps (NCC) or National Service Scheme (NSS) to develop discipline, leadership, and a spirit of service to the nation through various camps and community activities."
                        image="/college-images/c14.jpg"
                    />
                    <Card
                        title="Hostel Facilities"
                        description="Secure and comfortable hostel accommodation is available for students from distant areas, providing a home away from home with essential amenities and a conducive study environment."
                        image="/college-images/c15.jpg"
                    />
                    <Card
                        title="Placement Cell"
                        description="The Placement Cell actively works to bridge the gap between industry and academia, organizing campus drives, career counseling, and skill development workshops."
                        image="/college-images/c10.jpg"
                    />
                    <Card
                        title="Library"
                        description="A well-stocked library with a vast collection of books, journals, and digital resources to support academic excellence and research."
                        image="/college-images/c12.jpg"
                    />
                    <Card
                        title="Differently-Abled Friendly"
                        description="The campus is committed to inclusivity with barrier-free access, ramps, and dedicated facilities to ensure a comfortable learning environment for differently-abled students."
                        image="/college-images/c15.jpg"
                    />
                </div>
            </Section>

            {/* Student Support & Grievance Redressal */}
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 border-l-4 border-red-600 pl-4">Student Support & Redressal</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-red-50 p-6 rounded-lg border border-red-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-red-800 mb-3">Anti-Ragging Cell</h3>
                            <p className="text-gray-700 mb-4">
                                Zero tolerance policy towards ragging. We ensure a safe and friendly atmosphere for freshers and all students.
                            </p>
                            <Link to="/anti-ragging" className="inline-block bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition-colors">
                                Visit Anti-Ragging Cell
                            </Link>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-blue-800 mb-3">Grievance Redressal (SGRC)</h3>
                            <p className="text-gray-700 mb-4">
                                A dedicated committee to address and resolve student grievances related to academics, admission, or facilities.
                            </p>
                            <Link to="/grievance-redressal" className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800 transition-colors">
                                Lodge a Grievance
                            </Link>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-lg border border-purple-100 hover:shadow-md transition-shadow">
                            <h3 className="text-xl font-bold text-purple-800 mb-3">Internal Complaints Committee (ICC)</h3>
                            <p className="text-gray-700 mb-4">
                                Committed to providing a safe environment free from sexual harassment. The ICC handles all such complaints with sensitivity.
                            </p>
                            <Link to="/icc" className="inline-block bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition-colors">
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Highlight */}
            <Section title="Campus Life in Pictures" className="bg-gray-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <img src="/college-images/c8.jpg" alt="Campus Life" className="rounded shadow hover:opacity-90 transition-opacity" />
                    <img src="/college-images/c16.jpg" alt="Campus Life" className="rounded shadow hover:opacity-90 transition-opacity" />
                    <img src="/college-images/c18.jpg" alt="Campus Life" className="rounded shadow hover:opacity-90 transition-opacity" />
                    <img src="/college-images/c19.jpg" alt="Campus Life" className="rounded shadow hover:opacity-90 transition-opacity" />
                </div>
            </Section>
        </div>
    );
};

export default StudentLife;
