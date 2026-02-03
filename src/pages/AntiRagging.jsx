import React from 'react';

const AntiRagging = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-red-700 text-white py-6 px-6">
                    <h1 className="text-3xl font-bold">Anti-Ragging Cell</h1>
                    <p className="mt-2 text-red-100">Zero Tolerance Policy towards Ragging</p>
                </div>

                <div className="p-6 space-y-8">
                    <section>
                        <p className="text-gray-700 leading-relaxed font-medium">
                            Ragging is strictly prohibited in the college campus. Strict action will be taken against those found guilty of ragging and/or abetting ragging.
                        </p>
                    </section>

                    {/* Helpline */}
                    <section className="bg-red-50 border border-red-200 p-6 rounded-lg text-center">
                        <h2 className="text-2xl font-bold text-red-800 mb-2">National Anti-Ragging Helpline</h2>
                        <p className="text-3xl font-extrabold text-red-600">1800-180-5522</p>
                        <p className="text-sm text-red-700 mt-1">(24x7 Toll Free)</p>
                        <p className="mt-2 text-red-800">Email: <a href="mailto:helpline@antiragging.in" className="underline font-bold">helpline@antiragging.in</a></p>
                    </section>

                    {/* Committee */}
                    <section>
                        <div className="flex justify-between items-center mb-4 border-b pb-2">
                            <h2 className="text-xl font-bold text-gray-900">Anti-Ragging Committee</h2>
                            <span className="text-sm font-semibold text-red-800 bg-red-100 px-3 py-1 rounded-full">Tenure: 1 Year</span>
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
                                        <td className="px-6 py-4 font-medium text-gray-900">Swapnil Bapusaheb Deshmukh</td>
                                        <td className="px-6 py-4 text-gray-600">Secretary of the Institution</td>
                                        <td className="px-6 py-4 text-red-700 font-bold">Chairperson</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">Bharat Devidas Rathod</td>
                                        <td className="px-6 py-4 text-gray-600">Teacher Representative</td>
                                        <td className="px-6 py-4 text-gray-700">Member</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">Vikas Premsing Rathod</td>
                                        <td className="px-6 py-4 text-gray-600">Non-Teaching Representative</td>
                                        <td className="px-6 py-4 text-gray-700">Member</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">Vijay Bapusaheb Deshmukh</td>
                                        <td className="px-6 py-4 text-gray-600">Civil Administration (Gram Panchayat Member)</td>
                                        <td className="px-6 py-4 text-gray-700">Member</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">Amol Sampatrao Shirsath</td>
                                        <td className="px-6 py-4 text-gray-600">Gram Panchayat Representative</td>
                                        <td className="px-6 py-4 text-gray-700">Member</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">Nikita Shekhar Somvanshi</td>
                                        <td className="px-6 py-4 text-gray-600">Teacher Representative</td>
                                        <td className="px-6 py-4 text-gray-700">Member</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">Ganesh Uttamrao Chavan</td>
                                        <td className="px-6 py-4 text-gray-600">Parent Representative</td>
                                        <td className="px-6 py-4 text-gray-700">Member</td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4 font-medium text-gray-900">Dadarao Govindrao Pawar</td>
                                        <td className="px-6 py-4 text-gray-600">Police Representative</td>
                                        <td className="px-6 py-4 text-gray-700">Member</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Links */}
                    <section>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Important Links</h3>
                        <ul className="list-disc list-inside text-blue-600 space-y-2">
                            <li><a href="https://www.antiragging.in/" target="_blank" rel="noreferrer" className="hover:underline">UGC Anti-Ragging Website</a></li>

                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default AntiRagging;
