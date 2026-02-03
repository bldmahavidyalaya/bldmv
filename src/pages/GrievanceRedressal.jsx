import React from 'react';

const GrievanceRedressal = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-700 text-white py-6 px-6">
                    <h1 className="text-3xl font-bold">Grievance Redressal</h1>
                    <p className="mt-2 text-blue-100">Student Grievance Redressal Committee (SGRC)</p>
                </div>

                <div className="p-6 space-y-8">
                    <section>
                        <p className="text-gray-700 leading-relaxed">
                            The college has a dedicated mechanism to address the grievances of students. The Student Grievance Redressal Committee (SGRC) is constituted to ensure transparency and prevent unfair practices.
                        </p>
                    </section>

                    {/* Classification of Grievances */}
                    <section className="bg-blue-50 p-4 rounded-md">
                        <h3 className="font-bold text-lg text-blue-900 mb-2">Types of Grievances Redressed</h3>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                            <li>Admission matters</li>
                            <li>Fee related issues</li>
                            <li>Academic matters (exams, results, etc.)</li>
                            <li>Harassment or discrimination</li>
                            <li>Amenities and facilities</li>
                        </ul>
                    </section>

                    {/* Committee */}
                    <section>
                        <div className="flex justify-between items-center mb-4 border-b pb-2">
                            <h2 className="text-xl font-bold text-gray-900">Committee Members (SGRC)</h2>
                            <span className="text-sm font-semibold text-blue-800 bg-blue-100 px-3 py-1 rounded-full">Tenure: 3 Years</span>
                        </div>
                        <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-gray-200">
                            <table className="min-w-full divide-y divide-gray-200 text-sm">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left font-semibold text-gray-700 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left font-semibold text-gray-700 uppercase tracking-wider">Designation/Role</th>
                                        <th className="px-6 py-3 text-left font-semibold text-gray-700 uppercase tracking-wider">Position</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">Prof. Rani Chandrakant Kapse</td>
                                        <td className="px-6 py-4 text-gray-600">Female Professor</td>
                                        <td className="px-6 py-4 text-blue-700 font-bold">Chairperson</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">Prof. Ajay Bapusaheb Deshmukh</td>
                                        <td className="px-6 py-4 text-gray-600">Member</td>
                                        <td className="px-6 py-4 text-gray-700">Member</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">Abrah Kayyum Sheikh</td>
                                        <td className="px-6 py-4 text-gray-600">NGO Representative</td>
                                        <td className="px-6 py-4 text-gray-700">Member</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">Prof. Bharat Devidas Rathod</td>
                                        <td className="px-6 py-4 text-gray-600">Professor</td>
                                        <td className="px-6 py-4 text-gray-700">Member</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">Yogita Babasaheb Nimbalkar</td>
                                        <td className="px-6 py-4 text-gray-600">Non-Teaching Staff</td>
                                        <td className="px-6 py-4 text-gray-700">Member</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>




                </div>
            </div>
        </div>
    );
};

export default GrievanceRedressal;
