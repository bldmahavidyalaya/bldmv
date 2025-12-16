import React from 'react';

const ICC = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-purple-700 text-white py-6 px-6">
                    <h1 className="text-3xl font-bold">Internal Complaints Committee (ICC)</h1>
                    <p className="mt-2 text-purple-100">Prevention, Prohibition and Redressal of Sexual Harassment</p>
                </div>

                <div className="p-6 space-y-8">
                    <section>
                        <p className="text-gray-700 leading-relaxed">
                            As per the UGC (Prevention, Prohibition and Redressal of Sexual Harassment of Women employees and students in higher educational institutions) Regulations, 2015, the college has constituted the Internal Complaints Committee (ICC).
                        </p>
                    </section>

                    {/* Committee Members */}
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Committee Members</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Presiding Officer */}
                            <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition">
                                <h3 className="font-bold text-lg text-purple-800">Presiding Officer</h3>
                                <p className="mt-2 font-medium text-gray-900">[Name]</p>
                                <p className="text-sm text-gray-600">Senior Faculty</p>
                                <p className="text-sm mt-3 text-gray-500">Contact: [Email/Phone]</p>
                            </div>

                            {/* Member 1 */}
                            <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition">
                                <h3 className="font-bold text-lg text-gray-700">Member</h3>
                                <p className="mt-2 font-medium text-gray-900">[Name]</p>
                                <p className="text-sm text-gray-600">Faculty Member</p>
                            </div>

                            {/* Member 2 */}
                            <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition">
                                <h3 className="font-bold text-lg text-gray-700">Member</h3>
                                <p className="mt-2 font-medium text-gray-900">[Name]</p>
                                <p className="text-sm text-gray-600">Non-Teaching Staff</p>
                            </div>

                            {/* External Member */}
                            <div className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition">
                                <h3 className="font-bold text-lg text-gray-700">External Member</h3>
                                <p className="mt-2 font-medium text-gray-900">[Name]</p>
                                <p className="text-sm text-gray-600">NGO / Legal Expert</p>
                            </div>
                        </div>
                    </section>

                    {/* Complaint Procedure */}
                    <section className="bg-purple-50 p-6 rounded-lg">
                        <h2 className="text-xl font-bold text-purple-900 mb-3">How to File a Complaint</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-800">
                            <li>A written complaint can be submitted to the Presiding Officer or any member of the ICC.</li>
                            <li>Complaints can also be emailed to <strong>icc@[collegedomain].com</strong>.</li>
                            <li>The complaint should be submitted within 3 months of the date of the incident.</li>
                            <li>The identity of the complainant will be kept confidential.</li>
                        </ul>
                        <div className="mt-6">
                            <a href="#" className="bg-purple-700 text-white px-6 py-2 rounded-full font-bold hover:bg-purple-800 transition">
                                Download Complaint Form
                            </a>
                        </div>
                    </section>

                    <section>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Resources</h3>
                        <ul className="list-disc list-inside text-blue-600 space-y-2">
                            <li><a href="#" className="hover:underline">UGC Regulations, 2015 (PDF)</a></li>
                            <li><a href="#" className="hover:underline">Handbook on Sexual Harassment of Women at Workplace</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default ICC;
