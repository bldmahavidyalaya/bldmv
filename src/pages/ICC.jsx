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
                        <div className="flex justify-between items-center mb-4 border-b pb-2">
                            <h2 className="text-xl font-bold text-gray-900">Committee Members</h2>
                            <span className="text-sm font-semibold text-purple-800 bg-purple-100 px-3 py-1 rounded-full">Committee Tenure: 3 Years</span>
                        </div>
                        <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
                            <table className="min-w-full divide-y divide-gray-200 text-sm">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left font-semibold text-gray-700 uppercase tracking-wider">Role/Designation</th>
                                        <th className="px-6 py-3 text-left font-semibold text-gray-700 uppercase tracking-wider">Position</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">Prof. Rani Chandrakant Kapse</td>
                                        <td className="px-6 py-4 text-gray-600">Female Professor</td>
                                        <td className="px-6 py-4 text-purple-700 font-bold">Chairperson</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">Prof. Ajay Bapusaheb Deshmukh</td>
                                        <td className="px-6 py-4 text-gray-600">Professor</td>
                                        <td className="px-6 py-4 text-gray-700">Member</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">Tejas Pravin Chavan</td>
                                        <td className="px-6 py-4 text-gray-600">Non-Teaching Staff</td>
                                        <td className="px-6 py-4 text-gray-700">Member</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">Rohit Ganesh Chavan</td>
                                        <td className="px-6 py-4 text-gray-600">Student Representative</td>
                                        <td className="px-6 py-4 text-gray-700">Member</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">Abrah Kayyum Sheikh</td>
                                        <td className="px-6 py-4 text-gray-600">NGO Representative</td>
                                        <td className="px-6 py-4 text-gray-700">Member</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Complaint Procedure */}
                    <section className="bg-purple-50 p-6 rounded-lg">
                        <h2 className="text-xl font-bold text-purple-900 mb-3">How to File a Complaint</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-800">
                            <li>A written complaint can be submitted to the Presiding Officer or any member of the ICC.</li>
                            <li>Complaints can also be emailed to <strong>icc@bldmahavidyalay.com</strong>.</li>
                            <li>The complaint should be submitted within 3 months of the date of the incident.</li>
                            <li>The identity of the complainant will be kept confidential.</li>
                        </ul>
                    </section>


                </div>
            </div>
        </div>
    );
};

export default ICC;
