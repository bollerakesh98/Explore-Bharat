import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HiddenGems() {
  const [gems, setGems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/hidden-gems")
      .then(res => res.json())
      .then(data => setGems(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-10">
  <h1 className="text-4xl font-bold mb-6 text-purple-700">Hidden Gems 🌟</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {gems.map(gem => (
      <div key={gem.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition">
        <img src={gem.image || `https://source.unsplash.com/400x300/?${gem.name},india`} className="w-full h-48 object-cover" alt={gem.name} />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{gem.name}, {gem.state}</h2>
          <p className="mb-2 text-gray-700">{gem.description}</p>
          <Link to={`/place/${gem.id}`} className="text-purple-600 font-bold hover:underline">View Details →</Link>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}

export default HiddenGems;
