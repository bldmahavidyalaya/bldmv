import React from 'react';
import { Shield, BookOpen, Target, Award, Scale, FileText, CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-gray-50 min-h-screen">

            {/* HER0 SECTION */}
            <div className="bg-secondary text-white py-20 px-4">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wide mb-6">
                        About the <span className="text-yellow-400">Institution</span>
                    </h1>
                    <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                        Universities, colleges and higher education institutions provide educational programs beyond secondary education, awarding degrees that enable progression to graduate or professional studies. Such institutions operate under statutory authorization and accreditation frameworks ensuring quality, accountability and academic standards.
                    </p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 py-16 space-y-20">

                {/* INTRODUCTION */}
                <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-l-8 border-yellow-500">
                    <h2 className="text-2xl font-bold text-secondary mb-4 flex items-center gap-2">
                        <Shield className="w-8 h-8" />
                        Our Commitment
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        <strong className="text-gray-900">B.L.D. Mahavidyalaya (College Code 1270)</strong> is committed to providing transparent and quality-driven education aligned with NEP 2020 and UGC Self-Disclosure Guidelines 2024. Our institution serves learners with academic integrity, inclusivity and a mission of empowering students for administrative and civil services careers.
                    </p>
                </section>

                {/* VISION & MISSION */}
                <section className="grid md:grid-cols-2 gap-8">
                    {/* Vision */}
                    <div className="bg-green-900 text-white rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Target size={120} />
                        </div>
                        <h3 className="text-3xl font-black uppercase tracking-wider mb-6 text-yellow-400 flex items-center gap-3">
                            <Target /> Vision
                        </h3>
                        <p className="text-lg font-medium leading-relaxed">
                            To become a center of excellence that nurtures knowledge, discipline, character and a sense of responsibility towards society and the nation.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="bg-white text-gray-800 rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-xl border border-gray-100 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Award size={120} />
                        </div>
                        <h3 className="text-3xl font-black uppercase tracking-wider mb-6 text-secondary flex items-center gap-3">
                            <Award /> Mission
                        </h3>
                        <ul className="space-y-3 font-medium">
                            {['To provide accessible and affordable quality education.',
                                'To develop the intellectual and personal potential of each student.',
                                'To prepare students for civil services and competitive examinations.',
                                'To promote ethical leadership, research and community engagement.'
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-1" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* PROGRAM DETAILS */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="bg-yellow-500 p-3 rounded-lg text-white shadow-lg">
                            <BookOpen size={32} />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">B.A. in Civil Services — Program Details</h2>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
                        <div className="bg-gray-50 px-8 py-4 border-b border-gray-200">
                            <p className="text-secondary font-bold text-lg">We are providing B.A courses with best faculties.</p>
                        </div>
                        <div className="p-8 grid md:grid-cols-2 gap-x-12 gap-y-6">
                            <DetailRow label="Aim" value="To prepare students for competitive examinations (UPSC / State Services)." />
                            <DetailRow label="Eligibility" value="Passed H.S.S.C. with proficiency in English & Marathi." />
                            <DetailRow label="Medium" value="English, Marathi" />
                            <DetailRow label="Age Limit" value="17 to 25 Years" />
                            <DetailRow label="Duration" value="3 Years (6 Semesters)" />
                            <DetailRow label="Total Marks" value="3600 (Each semester: 6 subjects × 100 marks; 60 Theory + 40 Internal)." />
                        </div>
                        <div className="px-8 pb-8 pt-4">
                            <h4 className="font-bold text-gray-900 mb-3 border-b border-gray-100 pb-2">Course Structure</h4>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Compulsory Subjects</span>
                                    <ul className="mt-2 text-gray-700 list-disc list-inside">
                                        <li>English</li>
                                        <li>Sanskrit</li>
                                        <li>General Study - I</li>
                                        <li>Introduction to Civil Services</li>
                                    </ul>
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Elective Subjects (Choose Any Two)</span>
                                    <div className="mt-2 text-gray-700 flex flex-wrap gap-2">
                                        {['History', 'Sociology', 'Political Science', 'Economics', 'Public Administration', 'Geography', 'Marathi Literature', 'Sanskrit Literature', 'Mathematics'].map((sub, i) => (
                                            <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">{sub}</span>
                                        ))}
                                    </div>
                                    <p className="text-xs text-red-500 mt-2 font-semibold italic">* Note: Political Science + Public Administration cannot be taken together.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* LEGAL & IDP */}
                <div className="grid md:grid-cols-2 gap-8">
                    <section className="bg-white rounded-xl shadow-md p-8 border-t-4 border-secondary">
                        <div className="flex items-center gap-3 mb-4 text-secondary">
                            <Scale size={24} />
                            <h3 className="text-xl font-bold uppercase">Act & Statutes / MoA</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            The institution operates under the legal framework of <strong className="text-gray-900">Section 66 of the KKSU Act 1997</strong>, governing administrative structure, responsibilities and academic funcionamiento. The Memorandum of Association (MoA) outlines objectives, governance, and guiding principles ensuring academic excellence, fairness and student-centered development.
                        </p>
                    </section>

                    <section className="bg-white rounded-xl shadow-md p-8 border-t-4 border-yellow-500">
                        <div className="flex items-center gap-3 mb-4 text-secondary">
                            <FileText size={24} />
                            <h3 className="text-xl font-bold uppercase">Institutional Development Plan (IDP)</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            The IDP is a strategic roadmap aligned with <strong className="text-gray-900">NEP 2020 & UGC directives</strong>. It emphasizes academic innovation, inclusive education, research culture, infrastructure growth and community engagement. The IDP ensures that institutional activities remain learner-centric and future-oriented.
                        </p>
                    </section>
                </div>

                {/* ADDITIONAL INFO */}
                <section className="bg-gray-800 text-gray-300 rounded-2xl py-8 px-4 md:px-12">
                    <h3 className="text-center text-white font-bold uppercase tracking-widest mb-8 border-b border-gray-700 pb-4 inline-block mx-auto">Additional Information</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                        <InfoItem label="Accreditation" value="No ranking currently" />
                        <InfoItem label="UGC Status" value="2(f) / 12B Proposals Submitted" />
                        <InfoItem label="College Code" value="1270" />
                        <InfoItem label="Annual Reports" value="Nil" />
                        <InfoItem label="Annual Accounts" value="Nil" />
                        <InfoItem label="Sponsoring Body" value="Registered Society (Act 1980/1950)" />
                    </div>
                </section>

            </main>
        </div>
    );
};

// Helper Components
const DetailRow = ({ label, value }) => (
    <div className="flex flex-col sm:flex-row sm:items-baseline border-b border-gray-100 pb-2 last:border-0">
        <span className="w-32 font-bold text-gray-500 uppercase text-xs flex-shrink-0">{label}</span>
        <span className="text-gray-900 font-medium">{value}</span>
    </div>
);

const InfoItem = ({ label, value }) => (
    <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-700">
        <div className="text-gray-400 text-xs uppercase font-bold mb-1">{label}</div>
        <div className="text-white font-semibold">{value}</div>
    </div>
);

export default About;
