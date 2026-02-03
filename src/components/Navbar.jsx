import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Search } from "lucide-react";

/**
 * Navbar V7 - Compact Professional
 * Updated with flat navigation menu (No Dropdowns)
 */


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    // Site Search Index
    const searchIndex = [
        { title: "Home", path: "/", keywords: "home, main, landing" },
        { title: "About HEI", path: "/about", keywords: "about, history, mission, vision, management" },
        { title: "Administration", path: "/administration", keywords: "principal, staff, faculty, clerk, peon" },
        { title: "Academics", path: "/academics", keywords: "courses, ba, subjects, syllabus, exams, results" },
        { title: "Admissions", path: "/admissions", keywords: "admission, apply, eligibility, fees, documents" },
        { title: "Student Life", path: "/student-life", keywords: "activities, sports, events, facilities, ncc, nss" },
        { title: "Gallery", path: "/gallery", keywords: "photos, images, campus, events" },
        { title: "Anti-Ragging", path: "/anti-ragging", keywords: "ragging, complaint, committee, helpline" },
        { title: "Internal Complaints Committee (ICC)", path: "/icc", keywords: "icc, sexual harassment, women, complaint" },
        { title: "Grievance Redressal", path: "/grievance-redressal", keywords: "grievance, complaint, student support, ombudsperson" },
        { title: "Contact Us", path: "/contact", keywords: "contact, phone, email, address, location, map" },
        { title: "NIRF", path: "/nirf", keywords: "nirf, ranking, data" }
    ];

    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query.trim() === "") {
            setSearchResults([]);
            return;
        }

        const lowerQuery = query.toLowerCase();
        const results = searchIndex.filter(item =>
            item.title.toLowerCase().includes(lowerQuery) ||
            item.keywords.toLowerCase().includes(lowerQuery)
        );
        setSearchResults(results);
    };

    const handleResultClick = () => {
        setSearchQuery("");
        setSearchResults([]);
        setIsOpen(false);
    };

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About HEI", path: "/about" },
        { name: "Administration", path: "/administration" },
        { name: "Academics", path: "/academics" },
        { name: "Admissions", path: "/admissions" },
        { name: "Student Life", path: "/student-life" },
        { name: "Gallery", path: "/gallery" },
        {
            name: "Mandatory Disclosure",
            children: [
                { name: "Anti-Ragging", path: "/anti-ragging" },
                { name: "ICC", path: "/icc" },
                { name: "Grievance Redressal", path: "/grievance-redressal" },
            ],
        },
        { name: "Contact Us", path: "/contact" },
    ];

    return (
        <header className="w-full flex flex-col font-sans relative z-50 bg-white">

            {/* ================= 1. BRANDING (COMPACT) ================= */}
            <div className="py-2 border-b border-gray-100 shadow-sm relative z-10">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between gap-4">

                        {/* LEFT LOGO */}
                        <div className="flex-shrink-0">
                            <Link to="/">
                                <img
                                    src="/logo/bld_logo.jpg"
                                    alt="College Logo"
                                    className="h-16 w-16 md:h-20 md:w-20 object-contain hover:scale-105 transition-transform duration-300"
                                />
                            </Link>
                        </div>

                        {/* CENTER TEXT */}
                        <div className="flex-1 text-center flex flex-col justify-center">
                            <p className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1">
                                Affiliated to K.K.S.U. & Recognized by Govt. of Maharashtra
                            </p>

                            <div className="flex flex-col md:flex-row justify-center items-baseline gap-2 leading-none">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter text-secondary">
                                    B.L.D.
                                </h1>
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tighter text-yellow-600">
                                    MAHAVIDYALAYA
                                </h1>
                            </div>

                            <p className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">
                                (Arts, Commerce & Science)
                            </p>
                            <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">
                                College Code: 1270
                            </p>
                        </div>

                        {/* RIGHT LOGO */}
                        <div className="flex-shrink-0 hidden md:block">
                            <img
                                src="/logo/kksu.png"
                                alt="University Logo"
                                className="h-16 w-16 md:h-20 md:w-20 object-contain opacity-90 hover:opacity-100 transition-opacity"
                            />
                        </div>

                    </div>
                </div>
            </div>

            {/* ================= 2. NAV BAR (COMPACT) ================= */}
            <div className="bg-secondary shadow-md sticky top-0 z-40 border-t-2 border-yellow-500">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between h-12">

                        {/* DESKTOP LINKS */}
                        <nav className="hidden xl:flex items-center h-full">
                            {navItems.map((item, idx) => (
                                <div key={idx} className="relative group h-full">
                                    {item.children ? (
                                        <>
                                            <button className="h-full px-4 text-xs font-bold text-white uppercase tracking-wider hover:bg-white/10 hover:text-yellow-400 transition-colors flex items-center gap-1">
                                                {item.name}
                                                <ChevronDown size={12} className="opacity-70 group-hover:rotate-180 transition-transform" />
                                            </button>
                                            <div className="absolute top-full left-0 w-56 bg-white shadow-xl border-t-2 border-yellow-500 rounded-b opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                                                {item.children.map((child, cIdx) => (
                                                    <Link
                                                        key={cIdx}
                                                        to={child.path}
                                                        className="block px-4 py-2.5 text-xs font-bold text-gray-700 hover:bg-green-50 hover:text-secondary border-b border-gray-50 last:border-0"
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            className="h-full px-4 flex items-center text-xs font-bold text-white uppercase tracking-wider hover:bg-white/10 hover:text-yellow-400 transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* MOBILE TITLE (If desktop nav hidden) */}
                        <div className="xl:hidden text-white text-sm font-bold uppercase tracking-widest">
                            Menu
                        </div>

                        {/* COMPACT SEARCH BOX */}
                        <div className="hidden xl:block relative ml-auto">
                            <div className="flex items-center bg-white/10 rounded-full px-3 py-1 border border-white/20 focus-within:bg-white focus-within:border-white transition-colors group">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={(e) => handleSearch(e.target.value)}
                                    className="bg-transparent border-none text-white placeholder-gray-300 text-xs w-32 focus:w-48 focus:text-gray-900 focus:placeholder-gray-500 outline-none transition-all duration-300"
                                />
                                <Search size={14} className="text-gray-300 group-focus-within:text-secondary ml-2" />
                            </div>

                            {/* Desktop Search Results */}
                            {searchResults.length > 0 && (
                                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50">
                                    <div className="max-h-60 overflow-y-auto">
                                        {searchResults.map((result, idx) => (
                                            <Link
                                                key={idx}
                                                to={result.path}
                                                onClick={handleResultClick}
                                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary border-b border-gray-100 last:border-0"
                                            >
                                                <div className="font-bold">{result.title}</div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* MOBILE TOGGLE */}
                        <button
                            onClick={() => setIsOpen(true)}
                            className="xl:hidden p-1.5 text-white hover:bg-white/10 rounded ml-4"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>

            {/* ================= MOBILE MENU ================= */}
            <div
                className={`fixed inset-0 z-50 xl:hidden pointer-events-none ${isOpen ? 'pointer-events-auto' : ''}`}
            >
                <div
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setIsOpen(false)}
                />
                <div className={`absolute top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="flex flex-col h-full">
                        <div className="bg-secondary p-4 flex justify-between items-center text-white border-b border-green-800">
                            <span className="font-bold uppercase tracking-wider text-sm">Navigation</span>
                            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
                        </div>

                        {/* Mobile Search */}
                        <div className="p-4 bg-gray-50 border-b border-gray-100">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={(e) => handleSearch(e.target.value)}
                                    className="w-full pl-3 pr-8 py-2 text-sm border border-gray-200 rounded focus:border-secondary outline-none"
                                />
                                <Search size={16} className="absolute right-2.5 top-2.5 text-gray-400" />
                            </div>

                            {/* Mobile Search Results */}
                            {searchResults.length > 0 && (
                                <div className="mt-2 bg-white rounded-md shadow-lg border border-gray-100 overflow-hidden">
                                    {searchResults.map((result, idx) => (
                                        <Link
                                            key={idx}
                                            to={result.path}
                                            onClick={handleResultClick}
                                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 font-bold border-b border-gray-50 last:border-0"
                                        >
                                            {result.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className="flex-1 overflow-y-auto p-2">
                            {navItems.map((item, idx) => (
                                <div key={idx} className="border-b border-gray-50 last:border-0">
                                    {item.children ? (
                                        <div>
                                            <button
                                                onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)}
                                                className="flex w-full justify-between items-center px-4 py-3 text-sm font-bold text-gray-700 uppercase"
                                            >
                                                {item.name}
                                                <ChevronDown size={14} className={`transform transition-transform ${activeDropdown === idx ? 'rotate-180' : ''}`} />
                                            </button>
                                            <div className={`bg-gray-50 overflow-hidden transition-all ${activeDropdown === idx ? 'max-h-96' : 'max-h-0'}`}>
                                                {item.children.map((child, cIdx) => (
                                                    <Link
                                                        key={cIdx}
                                                        to={child.path}
                                                        onClick={() => setIsOpen(false)}
                                                        className="block pl-8 pr-4 py-2 text-xs font-semibold text-gray-600 hover:text-secondary"
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            to={item.path}
                                            onClick={() => setIsOpen(false)}
                                            className="block px-4 py-3 text-sm font-bold text-gray-700 uppercase hover:text-secondary hover:bg-gray-50"
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Navbar;
