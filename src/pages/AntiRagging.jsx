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
                        <h2 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Anti-Ragging Committee</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">[Name]</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Principal</td>
                                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Chairperson</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">[Name]</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Faculty Member</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Member</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">[Name]</td>
                                        <td className="px-6 py-4 whitespace-nowrap">NSS Program Officer</td>
                                        <td className="px-6 py-4 whitespace-nowrap">Member</td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Links */}
                    <section>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Important Links</h3>
                        <ul className="list-disc list-inside text-blue-600 space-y-2">
                            <li><a href="https://www.antiragging.in/" target="_blank" rel="noreferrer" className="hover:underline">UGC Anti-Ragging Website</a></li>
                            <li><a href="#" className="hover:underline">Online Anti-Ragging Affidavit</a></li>
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default AntiRagging;
