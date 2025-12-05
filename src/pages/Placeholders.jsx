import React from 'react';

const PagePlaceholder = ({ title }) => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-600">This page is currently under construction. Content will be added soon in compliance with UGC guidelines.</p>
    </div>
);

export const About = () => <PagePlaceholder title="About HEI" />;
export const Administration = () => <PagePlaceholder title="Administration" />;
export const Academics = () => <PagePlaceholder title="Academics" />;
export const Admissions = () => <PagePlaceholder title="Admissions" />;
export const StudentLife = () => <PagePlaceholder title="Student Life" />;
export const Contact = () => <PagePlaceholder title="Contact Us" />;
export const RTI = () => <PagePlaceholder title="Right to Information (RTI)" />;
