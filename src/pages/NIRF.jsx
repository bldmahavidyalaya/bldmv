import React from 'react';

const NIRF = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-teal-700 text-white py-6 px-6">
                    <h1 className="text-3xl font-bold">NIRF</h1>
                    <p className="mt-2 text-teal-100">National Institutional Ranking Framework</p>
                </div>

                <div className="p-6 space-y-8">
                    <section>
                        <p className="text-gray-700 leading-relaxed">
                            Data submitted to the National Institutional Ranking Framework (NIRF) is available here for public viewing.
                        </p>
                    </section>

                    {/* NIRF Years */}
                    <section>
                        <div className="space-y-4">

                            {/* 2024 */}
                            <div className="border rounded-lg p-4 bg-gray-50">
                                <h2 className="text-xl font-bold text-teal-900 mb-2">NIRF 2024</h2>
                                <div className="flex flex-wrap gap-3">
                                    <a href="#" className="flex items-center space-x-2 text-blue-600 hover:underline">
                                        <span>📄</span>
                                        <span>Full Report (PDF)</span>
                                    </a>
                                    <span className="text-gray-300">|</span>
                                    <a href="#" className="flex items-center space-x-2 text-blue-600 hover:underline">
                                        <span>📄</span>
                                        <span>Placement Data</span>
                                    </a>
                                </div>
                            </div>

                            {/* 2023 */}
                            <div className="border rounded-lg p-4 bg-gray-50">
                                <h2 className="text-xl font-bold text-teal-900 mb-2">NIRF 2023</h2>
                                <div className="flex flex-wrap gap-3">
                                    <a href="#" className="flex items-center space-x-2 text-blue-600 hover:underline">
                                        <span>📄</span>
                                        <span>Full Report (PDF)</span>
                                    </a>
                                </div>
                            </div>

                            {/* 2022 */}
                            <div className="border rounded-lg p-4 bg-gray-50">
                                <h2 className="text-xl font-bold text-teal-900 mb-2">NIRF 2022</h2>
                                <div className="flex flex-wrap gap-3">
                                    <a href="#" className="flex items-center space-x-2 text-blue-600 hover:underline">
                                        <span>📄</span>
                                        <span>Full Report (PDF)</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default NIRF;
