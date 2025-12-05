import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-xl font-bold text-primary mb-4">B.L.D. Mahavidyalaya</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Empowering rural students with quality education and preparation for Civil Services (UPSC, MPSC).
                        </p>
                        <div className="flex space-x-4">
                            {/* Social Icons Placeholder */}
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Facebook</a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Twitter</a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors">Instagram</a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/academics" className="hover:text-primary transition-colors">Courses</Link></li>
                            <li><Link to="/admissions" className="hover:text-primary transition-colors">Admissions</Link></li>
                            <li><Link to="/student-life" className="hover:text-primary transition-colors">Student Life</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Mandatory Disclosures (UGC) */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Mandatory Disclosures</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link to="/rti" className="hover:text-primary transition-colors">RTI</Link></li>
                            <li><Link to="/anti-ragging" className="hover:text-primary transition-colors">Anti-Ragging</Link></li>
                            <li><Link to="/icc" className="hover:text-primary transition-colors">Internal Complaints Committee</Link></li>
                            <li><Link to="/grievance" className="hover:text-primary transition-colors">Grievance Redressal</Link></li>
                            <li><Link to="/nirf" className="hover:text-primary transition-colors">NIRF</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                                <span>Mumbai-Nagpur Highway, Near Toll Plaza, Lasur Station, Tal. Gangapur, Dist. Chhatrapati Sambhajinagar (Maharashtra)</span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                                <span>9370078880, 9689773455</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                                <span>bldeducationagri@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} B.L.D. Mahavidyalaya. All rights reserved.</p>
                    <p className="mt-2">Designed & Developed in compliance with UGC Guidelines 2024.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
