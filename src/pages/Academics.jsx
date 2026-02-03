import React from 'react';
import { BookOpen, GraduationCap, Calendar, Scale, Library, Award, FileText, Check } from 'lucide-react';

const Academics = () => {
    return (
        <div className="bg-gray-50 min-h-screen">

            {/* HERO SECTION */}
            <div className="bg-secondary text-white py-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <GraduationCap size={300} />
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="inline-block px-4 py-1 bg-yellow-500 text-secondary font-bold text-xs uppercase tracking-widest mb-4 rounded-full">
                        Academic Programs
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-6">
                        B.A. in <span className="text-yellow-400">Civil Services</span>
                    </h1>
                    <p className="text-xl text-green-100 max-w-3xl leading-relaxed font-serif italic">
                        "Our Aim Is To Make Maharashtra Synonymous To IAS/IPS & Other Central Service In India."
                    </p>
                </div>
            </div>

            <main className="max-w-7xl mx-auto px-4 py-16 space-y-16">

                {/* INTRODUCTION */}
                <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border-t-4 border-yellow-500">
                    <h2 className="text-2xl font-bold text-secondary mb-6">Program Overview</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        India Administrative Services holds a unique appeal to the young 12th passed students. With its varied channels of service to the Nation, it offers immense scope to the young Indian to shoulder a responsibility in the task of Nation-Building.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        <strong>B.L.D. Mahavidyalaya</strong>, affiliated to <strong className="text-secondary">Kavikulaguru Kalidas Sanskrit University Ramtek</strong>, introduces a 3-year Degree B.A. in Civil Services. We are providing B.A courses with best faculties.
                    </p>
                </section>

                {/* HIGHLIGHTS */}
                <section className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow-md p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-green-50 text-secondary rounded-lg">
                                <Award size={24} />
                            </div>
                            <h3 className="text-xl font-bold">Program Highlights</h3>
                        </div>
                        <div className="space-y-4">
                            <HighlightRow label="Aim" value="To prepare the student for competitive Examinations (UPSC/MPSC)." />
                            <HighlightRow label="Eligibility" value="Passed H.S.S.C. Examination. Sound Knowledge of English and Marathi." />
                            <HighlightRow label="Medium" value="English, Marathi" />
                            <HighlightRow label="Age Limit" value="17 to 25 Years" />
                            <HighlightRow label="Period" value="3 Years (6 Semesters)" />
                            <HighlightRow label="Total Marks" value="3600 (Each semester: 6 subjects × 100 marks; 60 Theory + 40 Internal)." />
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-md p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-green-50 text-secondary rounded-lg">
                                <BookOpen size={24} />
                            </div>
                            <h3 className="text-xl font-bold">Subjects</h3>
                        </div>

                        <div className="mb-6">
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Compulsory Subjects</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {['English', 'Sanskrit', 'General Study - I', 'Introduction to Civil Services'].map((sub, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-700 font-medium bg-gray-50 px-3 py-2 rounded-md">
                                        <Check size={16} className="text-green-600" /> {sub}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">Elective Subjects (Select any two)</h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                                {['History', 'Sociology', 'Political Science', 'Economics', 'Public Administration', 'Geography', 'Marathi Literature', 'Sanskrit Literature', 'Mathematics'].map((sub, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-600">
                                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div> {sub}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-4 p-3 bg-red-50 text-red-600 text-xs font-bold rounded border border-red-100">
                                * Note: Political Science + Public Administration combination not allowed.
                            </div>
                        </div>
                    </div>
                </section>

                {/* ASSESSMENT TABLE */}
                <section className="bg-white rounded-2xl shadow-md overflow-hidden">
                    <div className="bg-gray-900 text-white p-6 flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <Scale className="text-yellow-400" />
                            <h3 className="text-xl font-bold">Assessment Structure</h3>
                        </div>
                        <span className="text-xs bg-white/10 px-3 py-1 rounded">Total Credits: 144</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-200 text-xs uppercase tracking-wider text-gray-500 font-bold">
                                    <th className="p-4">Year</th>
                                    <th className="p-4">Internal</th>
                                    <th className="p-4">Theory</th>
                                    <th className="p-4">Total</th>
                                    <th className="p-4">Credit</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-gray-700 text-sm font-medium">
                                <tr>
                                    <td className="p-4">1st Year (Sem I & II)</td>
                                    <td className="p-4">480</td>
                                    <td className="p-4">720</td>
                                    <td className="p-4">1200 <span className="text-xs text-green-600">(Pass: 420)</span></td>
                                    <td className="p-4">48</td>
                                </tr>
                                <tr>
                                    <td className="p-4">2nd Year (Sem III & IV)</td>
                                    <td className="p-4">480</td>
                                    <td className="p-4">720</td>
                                    <td className="p-4">1200 <span className="text-xs text-green-600">(Pass: 420)</span></td>
                                    <td className="p-4">48</td>
                                </tr>
                                <tr>
                                    <td className="p-4">3rd Year (Sem V & VI)</td>
                                    <td className="p-4">480</td>
                                    <td className="p-4">720</td>
                                    <td className="p-4">1200 <span className="text-xs text-green-600">(Pass: 420)</span></td>
                                    <td className="p-4">48</td>
                                </tr>
                                <tr className="bg-yellow-50 font-bold text-gray-900">
                                    <td className="p-4">Total</td>
                                    <td className="p-4">1440</td>
                                    <td className="p-4">2160</td>
                                    <td className="p-4">3600 <span className="text-xs text-green-700">(Pass: 1260)</span></td>
                                    <td className="p-4">144</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* UPSC GUIDE */}
                <section className="bg-gradient-to-br from-secondary to-green-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16"></div>

                    <h2 className="text-2xl md:text-3xl font-black uppercase mb-8 border-b border-green-700 pb-4 inline-block">
                        Civil Services Examination (UPSC) Guide
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                            <div className="text-yellow-400 font-bold text-lg mb-2">Stage 1: Preliminary</div>
                            <p className="text-green-100 text-sm">Two objective papers</p>
                            <ul className="mt-2 space-y-1 text-sm text-gray-300">
                                <li>• General Studies (200 Marks)</li>
                                <li>• CSAT (200 Marks)</li>
                            </ul>
                        </div>

                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                            <div className="text-yellow-400 font-bold text-lg mb-2">Stage 2: Main Exam</div>
                            <p className="text-green-100 text-sm">Written Test (1750 Marks)</p>
                            <p className="text-xs text-gray-300 mt-2">Qualifying language papers + Merit papers (Essay, GS I-IV, Optional Subjects)</p>
                        </div>

                        <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors">
                            <div className="text-yellow-400 font-bold text-lg mb-2">Stage 3: Interview</div>
                            <p className="text-green-100 text-sm">Personality Test (250 Marks)</p>
                            <div className="mt-4 pt-4 border-t border-white/10">
                                <p className="font-bold text-xl text-white">Grand Total: 2025</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center bg-black/20 rounded-lg p-4">
                        <p className="font-bold tracking-widest uppercase text-sm md:text-base">Target Services: IAS, IPS, IFS, IRS, and other Central Services</p>
                    </div>
                </section>

                {/* ADDITIONAL INFO */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    <InfoCard
                        icon={Calendar}
                        title="Academic Calendar"
                        color="blue"
                        action={<a href="/college-images/aced calender.pdf" download="Academic_Calendar_2024-25.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-bold text-sm hover:underline">Download Calendar 2024-25</a>}
                    />
                    <InfoCard
                        icon={Check}
                        title="IQAC"
                        color="green" d
                        desc="Responsible for ensuring quality in all academic and administrative activities."
                    />
                    <InfoCard
                        icon={Library}
                        title="Library"
                        color="yellow"
                        desc="Over 50,000 books and access to digital journals."
                        subtext="Open: 9:00 AM - 5:00 PM | Digital Access: 24/7"
                    />
                </div>
            </main>
        </div>
    );
};

const HighlightRow = ({ label, value }) => (
    <div className="flex flex-col sm:flex-row sm:items-baseline border-b border-gray-100 pb-2 last:border-0 hover:bg-gray-50 transition-colors px-2 rounded">
        <span className="w-32 font-bold text-gray-500 uppercase text-xs flex-shrink-0 pt-1">{label}</span>
        <span className="text-gray-900 font-medium">{value}</span>
    </div>
);

const InfoCard = ({ icon: Icon, title, desc, action, subtext, color }) => {
    const colors = {
        blue: "bg-blue-50 text-blue-600",
        green: "bg-green-50 text-green-600",
        yellow: "bg-yellow-50 text-yellow-600"
    };

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className={`w-12 h-12 ${colors[color]} rounded-lg flex items-center justify-center mb-4`}>
                <Icon size={24} />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
            {desc && <p className="text-sm text-gray-600 mb-2 leading-snug">{desc}</p>}
            {subtext && <p className="text-xs text-gray-400 font-medium">{subtext}</p>}
            {action && <div className="mt-2">{action}</div>}
        </div>
    );
};

export default Academics;
