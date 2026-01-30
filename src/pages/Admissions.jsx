import React from 'react';
import { motion } from 'framer-motion';

import { Download, FileText, Clock, AlertTriangle, Book, Shield } from 'lucide-react';
import SEO from '../components/SEO';

const Section = ({ title, icon: Icon, children, className = "" }) => (
    <section className={`py-8 md:py-12 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="flex items-center mb-6">
                    {Icon && <Icon className="w-8 h-8 text-green-700 mr-3" />}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 border-l-4 border-green-600 pl-4">{title}</h2>
                </div>
                {children}
            </motion.div>
        </div>
    </section>
);

const InfoCard = ({ title, children, className = "" }) => (
    <div className={`bg-white p-6 rounded-lg shadow-sm border border-gray-100 h-full ${className}`}>
        <h3 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">{title}</h3>
        <div className="text-gray-700 space-y-2">
            {children}
        </div>
    </div>
);

const ListItem = ({ children }) => (
    <li className="flex items-start">
        <span className="mr-2 text-green-600 mt-1">•</span>
        <span>{children}</span>
    </li>
);

const Admissions = () => {
    return (
        <div className="bg-gray-50 min-h-screen font-sans">
            <SEO
                title="Admissions"
                description="Admission rules, required documents, and general regulations for B.L.D. Mahavidyalaya."
            />
            {/* Hero Section */}
            <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden bg-green-900">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <img
                    src="/college-images/c18.jpg"
                    alt="Admissions"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 shadow-sm">Admissions</h1>
                    <p className="text-xl text-green-100 max-w-2xl mx-auto mb-8">
                        Join our academic community. Find all the details you need to apply.
                    </p>
                    <a
                        href="/college-images/Prospectus.pdf"
                        download="BLDMV_Prospectus.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-green-900 bg-white hover:bg-green-50 transition-colors shadow-lg"
                    >
                        <Download className="w-5 h-5 mr-2" />
                        Download Prospectus
                    </a>
                </div>
            </div>

            {/* Required Documents */}
            <Section title="Required Documents" icon={FileText}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <InfoCard title="Original Documents Required">
                        <ul className="space-y-2">
                            <ListItem>Leaving Certificate (LC) / Transfer Certificate (TC)</ListItem>
                            <ListItem>10th Mark sheet</ListItem>
                            <ListItem>12th Mark sheet</ListItem>
                            <ListItem>Income Certificate</ListItem>
                        </ul>
                    </InfoCard>

                    <InfoCard title="Xerox Documents (2 Sets)">
                        <ul className="space-y-2">
                            <ListItem>10th Mark sheet</ListItem>
                            <ListItem>12th Mark sheet</ListItem>
                            <ListItem>Leaving Certificate (TC)</ListItem>
                            <ListItem>Caste Certificate</ListItem>
                            <ListItem>Income Certificate</ListItem>
                            <ListItem>Passport Photo – 2</ListItem>
                            <ListItem>Ration Card</ListItem>
                            <ListItem>Domicile Certificate</ListItem>
                            <ListItem>Aadhar Card</ListItem>
                            <ListItem>Non-Creamy Layer Certificate (OBC, VJNT, SBC)</ListItem>
                            <ListItem>Bank Passbook (Aadhar Linked)</ListItem>
                        </ul>
                    </InfoCard>
                </div>

                <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-md">
                    <div className="flex items-start">
                        <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 flex-shrink-0" />
                        <div>
                            <h4 className="text-lg font-bold text-yellow-800">Important for ST Students</h4>
                            <p className="text-yellow-700">
                                It is necessary for Schedule Tribe (ST) students to obtain a Caste Certificate from the Project Officer,
                                Integrated Tribal Development Project, Nagpur. Otherwise, they will not avail reserved category facilities.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Rules & Regulations */}
            <Section title="Admission Rules & General Regulations" icon={Book} className="bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-4 border border-gray-100 rounded hover:shadow-md transition">
                        <h4 className="font-bold text-green-800 mb-2">Uniform</h4>
                        <p className="text-sm text-gray-600">It is compulsory for all the students to attend college in the uniform approved by the college session.</p>
                    </div>
                    <div className="p-4 border border-gray-100 rounded hover:shadow-md transition">
                        <h4 className="font-bold text-green-800 mb-2">Attendance</h4>
                        <p className="text-sm text-gray-600">Minimum 75% attendance is mandatory. Students with less than 75% will be detained from University Examination.</p>
                    </div>
                    <div className="p-4 border border-gray-100 rounded hover:shadow-md transition">
                        <h4 className="font-bold text-green-800 mb-2">Attendance Fine</h4>
                        <p className="text-sm text-gray-600">A fine of Rs. 100/- per paper will be imposed for remaining absent from the College Examination without prior permission.</p>
                    </div>
                    <div className="p-4 border border-gray-100 rounded hover:shadow-md transition">
                        <h4 className="font-bold text-green-800 mb-2">Concurrent Study</h4>
                        <p className="text-sm text-gray-600">Students shall not be allowed to join any other course of study simultaneously outside the college.</p>
                    </div>
                    <div className="p-4 border border-gray-100 rounded hover:shadow-md transition">
                        <h4 className="font-bold text-green-800 mb-2">Fee Payment</h4>
                        <p className="text-sm text-gray-600">If a student leaves the college after the 1st semester, she/he will be bound to pay the full fees of the year.</p>
                    </div>
                    <div className="p-4 border border-gray-100 rounded hover:shadow-md transition">
                        <h4 className="font-bold text-green-800 mb-2">Address Change</h4>
                        <p className="text-sm text-gray-600">Any change in local or permanent address should be notified to the admission section promptly in writing.</p>
                    </div>
                    <div className="p-4 border border-gray-100 rounded hover:shadow-md transition md:col-span-2 lg:col-span-3">
                        <h4 className="font-bold text-green-800 mb-2">Jurisdiction</h4>
                        <p className="text-sm text-gray-600">Any dispute arising will be subject to Nagpur city jurisdiction only.</p>
                    </div>
                </div>
            </Section>

            {/* Code of Conduct */}
            <Section title="Code of Conduct" icon={Shield}>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <ul className="divide-y divide-gray-100">
                        {[
                            { title: "Behavior", desc: "Students are expected to obey all orders and behave respectfully towards the Principal, lecturers, and staff." },
                            { title: "Mobiles", desc: "Students should NOT carry mobile phones on college premises." },
                            { title: "Loitering", desc: "Students shall not unnecessarily loiter in the college premises. Off periods may be spent in the Library Reading Room." },
                            { title: "Outsiders", desc: "No student shall bring any friend who is not a student of this college into the premises." },
                            { title: "Prohibitions", desc: "Writing/painting on walls, spitting, littering, and playing Holi on premises is strictly prohibited." },
                            { title: "Property Damage", desc: "Cost of damage to college property will be recovered from students individually or collectively." },
                            { title: "Agitation", desc: "Participation in strikes, morchas, or boycotting classes without 15 days prior intimation to the Principal is grounds for rustication." },
                            { title: "Unions", desc: "Students are not authorized to form unions/societies or invite guests without Principal's consent." }
                        ].map((item, index) => (
                            <li key={index} className="p-4 hover:bg-gray-50 transition">
                                <span className="font-bold text-gray-900 block mb-1">{item.title}</span>
                                <span className="text-gray-600 text-sm">{item.desc}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>

            {/* Scholarship, Refund & Office */}
            <Section title="General Information" icon={Clock} className="bg-green-50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded shadow-sm">
                        <h3 className="font-bold text-lg mb-3 text-green-800">Scholarships</h3>
                        <p className="text-gray-700">Government of India (GOI) Scholarships are available for eligible students.</p>
                    </div>

                    <div className="bg-white p-6 rounded shadow-sm">
                        <h3 className="font-bold text-lg mb-3 text-green-800">Office Timing</h3>
                        <div className="flex items-center text-gray-700">
                            <Clock className="w-5 h-5 mr-2 text-green-600" />
                            <span>10:00 AM To 5:00 PM</span>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded shadow-sm">
                        <h3 className="font-bold text-lg mb-3 text-green-800">Refund of Deposits</h3>
                        <p className="text-gray-700 text-sm mb-2">
                            Apply between <strong>1st October and 15th December</strong>.
                        </p>
                        <p className="text-gray-600 text-xs">
                            *Requires submission of original receipts. Claims made after this period will be forfeited.
                        </p>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Admissions;
