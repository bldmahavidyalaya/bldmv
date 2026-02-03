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
                        {/* <InfoItem label="Accreditation" value="No ranking currently" /> */}
                        <InfoItem label="UGC Status" value="2(f) / 12B Proposals Submitted" />
                        <InfoItem label="College Code" value="1270" />
                        {/* <InfoItem label="Annual Reports" value="Nil" /> */}
                        {/* <InfoItem label="Annual Accounts" value="Nil" /> */}
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
