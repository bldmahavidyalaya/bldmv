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
                        <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Committee Members (SGRC)</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 text-sm">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">Name</th>
                                        <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">Designation</th>
                                        <th className="px-4 py-2 text-left font-medium text-gray-500 uppercase">Role</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-4 py-3">[Name]</td>
                                        <td className="px-4 py-3">Principal</td>
                                        <td className="px-4 py-3 font-semibold">Chairperson</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3">[Name]</td>
                                        <td className="px-4 py-3">Senior Faculty</td>
                                        <td className="px-4 py-3">Member</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3">[Name]</td>
                                        <td className="px-4 py-3">Student Representative</td>
                                        <td className="px-4 py-3">Special Invitee</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Ombudsperson */}
                    <section className="bg-white border-l-4 border-yellow-400 p-4 shadow-sm">
                        <h2 className="text-xl font-bold text-gray-900 mb-2">Ombudsperson</h2>
                        <p className="text-gray-600 mb-2">For appeals against the decision of the SGRC, students may approach the Ombudsperson appointed by the University.</p>
                        <div className="mt-2">
                            <p className="font-bold">[Name of Ombudsperson]</p>
                            <p>Retired Judge / Professor</p>
                            <p>Email: [Email ID]</p>
                        </div>
                    </section>

                    {/* Grievance Form */}
                    <section className="text-center py-6">
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Submit a Grievance</h3>
                        <p className="text-gray-600 mb-4">You can submit your grievance online through the portal or download the form.</p>
                        <div className="space-x-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md transition">
                                Online Grievance Form
                            </button>
                            <button className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-2 px-6 rounded-md border border-blue-600 transition">
                                Download Form (PDF)
                            </button>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default GrievanceRedressal;
