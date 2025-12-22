import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PlaceDetails() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/api/destinations`)
      .then(res => res.json())
      .then(data => {
        const found = data.find(d => d.id === parseInt(id));
        setPlace(found);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!place) return <p className="p-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-10">
  <img src={place.image || `https://source.unsplash.com/800x400/?${place.name},india`} className="w-full h-64 object-cover rounded-lg mb-6" />
  <h1 className="text-4xl font-bold mb-4">{place.name}, {place.state}</h1>
  <p className="mb-4 text-gray-700">{place.description}</p>
  <div className="grid grid-cols-2 gap-4 text-gray-600">
    <span><b>Interest:</b> {place.interest}</span>
    <span><b>Budget:</b> ₹{place.budget}/day</span>
    <span><b>Days:</b> {place.days}</span>
    <span><b>Best Time:</b> {place.best_time}</span>
  </div>
</div>
  );
}

export default PlaceDetails;
