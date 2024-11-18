// // src/components/ManageDonor.jsx
// import React, { useState } from 'react';

// const ManageDonor = () => {
//   // Placeholder data (replace this with data from your backend)
//   const [donors, setDonors] = useState([
//     { id: 1, name: 'Donor1', email: 'donor1@example.com' },
//     { id: 2, name: 'Donor2', email: 'donor2@example.com' },
//     // Add more donors as needed
//   ]);

//   const [searchTerm, setSearchTerm] = useState('');

//   const handleDeleteDonor = (id) => {
//     // Implement your delete donor logic here
//     // For demonstration purposes, we'll filter out the donor with the given id
//     setDonors((prevDonors) => prevDonors.filter((donor) => donor.id !== id));
//   };

//   const filteredDonors = donors.filter((donor) =>
//     donor.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <h2 className="text-2xl font-semibold text-gray-800 mb-4">Manage Donors</h2>
//       <div className="bg-white p-6 rounded-md shadow-md">
//         {/* Search input and button */}
//         <div className="flex items-center mb-4">
//           <input
//             type="text"
//             placeholder="Search by name"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md mr-2"
//           />
//           <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Search</button>
//         </div>

//         {/* Table to display donor data */}
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead>
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
//                 Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
//                 Email
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {filteredDonors.map((donor) => (
//               <tr key={donor.id}>
//                 <td className="px-6 py-4 whitespace-nowrap">{donor.name}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{donor.email}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   {/* Delete button for each row */}
//                   <button
//                     className="text-red-500"
//                     onClick={() => handleDeleteDonor(donor.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageDonor;

// src/components/ManageDonor.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ManageDonor = () => {
//   const [donors, setDonors] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     const fetchDonors = async () => {
//       try {
//         const response = await axios.get('http://localhost:5001/donors');
//         setDonors(response.data);
//       } catch (error) {
//         console.error('Error fetching donors:', error);
//       }
//     };

//     fetchDonors();
//   }, []);

//   const handleDeleteDonor = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5001/donors/${id}`);
//       setDonors((prevDonors) => prevDonors.filter((donor) => donor._id !== id));
//     } catch (error) {
//       console.error('Error deleting donor:', error);
//     }
//   };

//   const filteredDonors = donors.filter((donor) =>
//     donor.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <div className="bg-white p-6 rounded-md shadow-md">
//         {/* Search input and button */}
//         <div className="flex items-center mb-4">
//           <input
//             type="text"
//             placeholder="Search by name"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="p-2 border border-gray-300 rounded-md mr-2"
//           />
//           <button className="px-4 py-2 bg-blue-500 text-white rounded-md">Search</button>
//         </div>

//         {/* Table to display donor data */}
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead>
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
//                 Name
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
//                 Email
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200">
//             {filteredDonors.map((donor) => (
//               <tr key={donor._id}>
//                 <td className="px-6 py-4 whitespace-nowrap">{donor.name}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">{donor.email}</td>
//                 <td className="px-6 py-4 whitespace-nowrap">
//                   <button
//                     className="text-red-500"
//                     onClick={() => handleDeleteDonor(donor._id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ManageDonor;

// src/components/ManageDonor.jsx
// src/components/ManageDonor.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageDonor = () => {
  const [donors, setDonors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get('http://localhost:5001/donors');
        setDonors(response.data);
      } catch (error) {
        console.error('Error fetching donors:', error);
      }
    };

    fetchDonors();
  }, []);

  const handleDeleteDonor = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/donors/${id}`);
      setDonors((prevDonors) => prevDonors.filter((donor) => donor._id !== id));
    } catch (error) {
      console.error('Error deleting donor:', error);
    }
  };

  const filteredDonors = donors.filter((donor) =>
    donor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="bg-white p-6 rounded-md shadow-md">
        <div className="flex items-center mb-4">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border border-gray-300 rounded-md mr-2"
          />
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-coffee font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-coffee dark:hover-bg-coffee dark:focus:ring-blue-800"
          style={{ color: 'white' }}>Search</button>
        </div>

        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-bold text-coffee uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredDonors.map((donor) => (
              <tr key={donor._id}>
                <td className="px-6 py-4 whitespace-nowrap">{donor.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{donor.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-coffee font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-coffee dark:hover-bg-coffee dark:focus:ring-blue-800"
                    style={{ color: 'white' }}
                    onClick={() => handleDeleteDonor(donor._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDonor;
