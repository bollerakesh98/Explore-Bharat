// src/pages/Explore.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaClock, FaMoneyBillWave, FaMapMarkerAlt } from "react-icons/fa";

function Explore() {
  const [destinations, setDestinations] = useState([]);
  const [interest, setInterest] = useState("");
  const [budget, setBudget] = useState("");
  const [days, setDays] = useState("");

  const fetchDestinations = () => {
    let url = "http://localhost:8080/api/destinations?";
    if (interest) url += `interest=${interest}&`;
    if (budget) url += `budget=${budget}&`;
    if (days) url += `days=${days}&`;

    fetch(url)
      .then(res => res.json())
      .then(data => setDestinations(data))
      .catch(err => console.error(err));
  };

  useEffect(() => { fetchDestinations(); }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-blue-800">Explore Destinations</h1>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <select onChange={e => setInterest(e.target.value)} className="border rounded px-3 py-2">
          <option value="">All Interests</option>
          <option value="beach">Beach</option>
          <option value="nature">Nature</option>
          <option value="spiritual">Spiritual</option>
        </select>
        <input type="number" placeholder="Max Budget" onChange={e => setBudget(e.target.value)} className="border rounded px-3 py-2" />
        <input type="number" placeholder="Max Days" onChange={e => setDays(e.target.value)} className="border rounded px-3 py-2" />
        <button onClick={fetchDestinations} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Apply</button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map(dest => (
          <div key={dest.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300">
            <img src={dest.image || `https://source.unsplash.com/400x300/?${dest.name},india`} alt={dest.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2 text-blue-700">{dest.name}, {dest.state}</h2>
              <p className="text-gray-700 mb-2">{dest.description}</p>
              <div className="flex justify-between items-center text-gray-600 mb-2">
                <span className="flex items-center gap-1"><FaMoneyBillWave /> ₹{dest.budget}/day</span>
                <span className="flex items-center gap-1"><FaClock /> {dest.days} days</span>
              </div>
              <div className="flex gap-2 mb-2">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{dest.interest}</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">{dest.language || 'Multi-Language'}</span>
              </div>
              <Link to={`/place/${dest.id}`} className="text-blue-600 font-bold hover:underline">
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Explore;
