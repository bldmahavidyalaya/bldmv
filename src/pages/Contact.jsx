import React from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

            {/* Hero Section */}
            <div className="relative bg-white shadow-sm border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-poppins">
                            Get in <span className="text-blue-600">Touch</span>
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            We are here to help you with any questions regarding admissions, academics, or our campus.
                            Reach out to us through any of the channels below.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Contact Information Cards */}
                    <div className="space-y-6">

                        {/* Address Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-slate-100 group">
                            <div className="flex items-start space-x-4">
                                <div className="bg-blue-50 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                    <MapPin className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Visit Us</h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        Mumbai-Nagpur Highway,<br />
                                        Near Toll Plaza, Lasur Station,<br />
                                        Tal. Gangapur, Dist. Chh. Sambhajinagar.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-slate-100 group">
                            <div className="flex items-start space-x-4">
                                <div className="bg-amber-50 p-3 rounded-xl group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300">
                                    <Phone className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
                                    <div className="space-y-1">
                                        <p className="text-slate-600 font-medium">+91 93700 78880</p>
                                        <p className="text-slate-600 font-medium">+91 96897 73455</p>
                                    </div>
                                    <p className="text-sm text-slate-400 mt-2">Mon - Sat, 9:00 AM - 5:00 PM</p>
                                </div>
                            </div>
                        </div>

                        {/* Email Card */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-slate-100 group">
                            <div className="flex items-start space-x-4">
                                <div className="bg-emerald-50 p-3 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                                    <Mail className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
                                    <a href="mailto:bldeducationagri@gmail.com" className="text-blue-600 font-medium hover:underline block mb-1">
                                        bldeducationagri@gmail.com
                                    </a>
                                    <p className="text-sm text-slate-500">For general inquiries and admissions</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                            <div className="p-8 md:p-10">
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                                        <select
                                            id="subject"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white text-slate-600"
                                        >
                                            <option>Admission Inquiry</option>
                                            <option>Course Details</option>
                                            <option>General Support</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                                        <textarea
                                            id="message"
                                            rows="4"
                                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white"
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center space-x-2"
                                    >
                                        <span>Send Message</span>
                                        <Send className="w-5 h-5" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-16 bg-white p-4 rounded-2xl shadow-lg border border-slate-100">
                    <div className="w-full h-[400px] rounded-xl overflow-hidden bg-slate-100 relative group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15009.68269784139!2d75.0561578!3d19.8631163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9e763071358b%3A0x2da2dcb2a3360216!2sLasur%2C%20Maharashtra%20423702!5e0!3m2!1sen!2sin!4v1716960000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale group-hover:grayscale-0 transition-all duration-500"
                        ></iframe>

                        <div className="absolute inset-0 pointer-events-none group-hover:pointer-events-auto flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
