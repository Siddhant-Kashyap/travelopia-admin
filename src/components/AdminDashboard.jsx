import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const AdminDashboard = () => {
    const navigate = useNavigate();
  const [trips, setTrips] = useState([]);
  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate('/')
  }
  useEffect(()=>{
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/');
    }
  },[])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://travelopia-backend-4lw5.onrender.com/api/trips");
        console.log(response)
        console.log(response.data)
        setTrips(response.data);
      } catch (error) {
        console.error("Error fetching trip data", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div>
        <div className=" flex justify-between items-center text-2xl p-4 text-orange-400 font-kodemono font-semibold">
            <div>
            {" "}
          Hello Admin ! welcome to Enchanting Travels{" "}

            </div>
            <div>
            <button onClick={handleLogout} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">LogOut</button>   </div>
          
        </div>
        <div>
          <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
              <div className="overflow-x-auto">
                <div className="min-w-full shadow overflow-hidden rounded-lg border-b border-gray-200">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Full Name
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Email
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Phone
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Destination
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Budget
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Interest
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Traveler
                        </th>
                        <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                          Days
                        </th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      {trips.map((trip) => (
                        <tr key={trip._id}>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            {trip.fullname}
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            {trip.email}
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            {trip.phone}
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            {trip.destination}
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            {trip.budget}
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            {trip.interest}
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            {trip.traveler}
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            {trip.days}
                          </td>
                          
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
