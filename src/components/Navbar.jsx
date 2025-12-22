import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Administration", path: "/administration" },
    { name: "Academics", path: "/academics" },
    { name: "Admissions", path: "/admissions" },
    { name: "Student Life", path: "/student-life" },
    { name: "Gallery", path: "/gallery" },
    {
      name: "Mandatory Disclosure",
      children: [
        { name: "RTI", path: "/rti" },
        { name: "Anti-Ragging", path: "/anti-ragging" },
        { name: "ICC", path: "/icc" },
        { name: "Grievance Redressal", path: "/grievance-redressal" },
        { name: "NIRF", path: "/nirf" },
      ],
    },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      {/* ================= HEADER ROW ================= */}
      <div className="max-w-7xl mx-auto px-3">
<div className="flex items-center justify-between h-20">

          {/* LEFT LOGO */}
          <img
            src="/logo/bld_logo.jpg"
            alt="College Logo"
            className="h-10 w-10 md:h-12 md:w-12"
          />

          {/* CENTER CONTENT (SAME DATA) */}
          <div className="text-center flex-1 px-2 leading-tight">
            <p className="text-[10px] md:text-xs text-gray-600">
              Affiliated to Kavikulaguru Kalidas Sanskrit University, Ramtek
            </p>

            <h1 className="text-sm md:text-lg font-extrabold text-green-900 tracking-wide">
              B.L.D. Mahavidyalaya
            </h1>

            <p className="text-[10px] md:text-xs font-bold text-green-900">
              (College Code: 1234)
            </p>
          </div>

          {/* RIGHT LOGO + MENU */}
          <div className="flex items-center gap-2">
            <img
              src="/logo/kksu.png"
              alt="University Logo"
              className="h-8 w-8 md:h-10 md:w-10"
            />

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* ================= DESKTOP NAV ================= */}
      <nav className="hidden md:block bg-primary">
        <div className="flex justify-center h-11">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.children ? (
                <>
                  <button className="px-3 py-2 text-sm font-bold uppercase text-secondary hover:bg-secondary hover:text-white">
                    {item.name}
                    <ChevronDown size={14} className="inline ml-1" />
                  </button>
                  <div className="absolute left-0 mt-1 w-56 bg-white shadow opacity-0 invisible group-hover:visible group-hover:opacity-100">
                    {item.children.map((c) => (
                      <Link
                        key={c.name}
                        to={c.path}
                        className="block px-4 py-2 text-sm hover:bg-primary hover:text-white"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className="px-3 py-2 text-sm font-bold uppercase text-secondary hover:bg-secondary hover:text-white"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.name}>
                  <p className="font-bold uppercase text-gray-700">
                    {item.name}
                  </p>
                  <div className="pl-4">
                    {item.children.map((c) => (
                      <Link
                        key={c.name}
                        to={c.path}
                        onClick={() => setOpen(false)}
                        className="block py-1 text-sm text-gray-600"
                      >
                        {c.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className="block py-2 font-bold uppercase"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
