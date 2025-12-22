import React from 'react';

const AdministrationPage = () => {
  const administrationData = [
    { srNo: 1, name: "SWAPNIL BAPUSAHEB DESHMUKH", designation: "PRINCIPAL", subject: "ENGLISH" },
    { srNo: 2, name: "AJAY BAPUSAHEB DESHMUKH", designation: "TEACHER", subject: "SOCIOLOGY" },
    { srNo: 3, name: "BHARAT DEVIDAS RATHOD", designation: "TEACHER", subject: "GEOGRAPHY" },
    { srNo: 4, name: "RAHUL VISHWAS MORE", designation: "TEACHER", subject: "ECONOMICS" },
    { srNo: 5, name: "SHANKAR ANNASAHEB BOBADE", designation: "TEACHER", subject: "POLITICAL SCIENCE" },
    { srNo: 6, name: "AMOL SHIVAJI FASALE", designation: "TEACHER", subject: "HISTORY" },
    { srNo: 7, name: "YOGITA CHANDRAKANT KAPSE", designation: "TEACHER", subject: "LIBRARIAN" },
    { srNo: 8, name: "AMOL MAHADEV KADAM", designation: "TEACHER", subject: "SANSKRIT" },
    { srNo: 9, name: "RAHUL SHANKARRAO GHATE", designation: "CLERK", subject: "--" },
    { srNo: 10, name: "VIKAS PREMSING RATHOD", designation: "TEACHER", subject: "MATHEMATICS" },
    { srNo: 11, name: "SAGAR MOTIRAM SHIRSATH", designation: "TEACHER", subject: "PHYSICAL EDUCATION TEACHER" },
    { srNo: 12, name: "SAMARTH NANA BHAGURE", designation: "COMPUTER OPERATOR", subject: "--" },
    { srNo: 13, name: "TEJAS PRAVIN CHAVAN", designation: "PEON", subject: "--" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-green-900 mb-2">Administrative Team</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Meet our dedicated team of administrators, educators, and staff who work tirelessly 
            to maintain the highest standards of education and administration at B.L.D. Mahavidyalaya.
          </p>
        </div>

        {/* Administration Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {administrationData.map((person) => (
            <div key={person.srNo} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              {/* Profile Header */}
              <div className={`p-4 ${person.designation === 'PRINCIPAL' ? 'bg-gradient-to-r from-amber-600 to-amber-500' : 'bg-gradient-to-r from-green-600 to-green-500'} text-white`}>
                <div className="flex items-center">
                  {/* Profile Avatar */}
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl font-bold">
                      {person.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{person.name.split(' ')[0]}</h3>
                    <p className="text-sm opacity-90">{person.designation}</p>
                  </div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="p-5">
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-1">Full Name</h4>
                  <p className="text-gray-800">{person.name}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-1">Designation</h4>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                    person.designation === 'PRINCIPAL' 
                      ? 'bg-amber-100 text-amber-800' 
                      : person.designation === 'TEACHER' 
                      ? 'bg-green-100 text-green-800' 
                      : person.designation === 'CLERK' 
                      ? 'bg-emerald-100 text-emerald-800'
                      : person.designation === 'COMPUTER OPERATOR'
                      ? 'bg-violet-100 text-violet-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {person.designation}
                  </span>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">Subject/Department</h4>
                  <p className={`text-gray-800 ${person.subject !== '--' ? 'font-medium' : 'text-gray-500'}`}>
                    {person.subject !== '--' ? person.subject : 'Not Applicable'}
                  </p>
                </div>
              </div>

              {/* Footer with Serial Number */}
              <div className="bg-gray-50 px-5 py-3 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Employee ID: BLDM{person.srNo.toString().padStart(3, '0')}</span>
                  <span className="text-sm text-gray-500">Serial No: {person.srNo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdministrationPage;