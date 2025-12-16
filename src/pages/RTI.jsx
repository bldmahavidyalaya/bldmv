import React from 'react';

const RTI = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-primary text-secondary py-6 px-6">
                    <h1 className="text-3xl font-bold">Right to Information (RTI)</h1>
                    <p className="mt-2 text-indigo-100">Establishment of RTI Cell as per the RTI Act, 2005</p>
                </div>

                <div className="p-6 space-y-8">
                    {/* Section 1: Introduction */}
                    <section>
                        <p className="text-gray-700 leading-relaxed">
                            In Compliance with the Right to Information Act, 2005, the college has appointed the following officers to
                            address the queries and provide information to the public.
                        </p>
                    </section>

                    {/* Section 2: Public Information Officer */}
                    <section className="bg-gray-50 p-4 rounded-md border border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            Public Information Officer (PIO)
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-500 uppercase font-bold">Name</p>
                                <p className="font-medium text-lg">[Name of PIO]</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase font-bold">Designation</p>
                                <p className="font-medium text-lg">Principal / Senior Faculty</p>
                            </div>
                            <div className="md:col-span-2">
                                <p className="text-sm text-gray-500 uppercase font-bold">Contact Details</p>
                                <p className="font-medium">Phone: [Phone Number]</p>
                                <p className="font-medium">Email: [Email Address]</p>
                                <p className="font-medium">Address: [Office Address]</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Appellate Authority */}
                    <section className="bg-gray-50 p-4 rounded-md border border-gray-200">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                            Appellate Authority
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-500 uppercase font-bold">Name</p>
                                <p className="font-medium text-lg">[Name of Appellate Authority]</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase font-bold">Designation</p>
                                <p className="font-medium text-lg">[Designation]</p>
                            </div>
                            <div className="md:col-span-2">
                                <p className="text-sm text-gray-500 uppercase font-bold">Contact Details</p>
                                <p className="font-medium">Phone: [Phone Number]</p>
                                <p className="font-medium">Email: [Email Address]</p>
                                <p className="font-medium">Address: [Office Address]</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 4: Links/Downloads */}
                    <section>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">Relevant Documents</h3>
                        <ul className="list-disc list-inside text-blue-600 space-y-2">
                            <li><a href="#" className="hover:underline">RTI Act, 2005 (PDF)</a></li>
                            <li><a href="#" className="hover:underline">Application Format</a></li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default RTI;
