import { destinations } from "../data";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Explore() {
  const [search, setSearch] = useState("");

  const filteredPlaces = destinations.filter(place =>
    place.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="header">Explore Near You 🌍</div>

      <div className="page">

        {/* Map */}
        <div className="card map-card">
          <h3>Map View</h3>
          <p>Discover places near your location</p>
        </div>

        {/* Search */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Search places, hills, beaches..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="card">
          <h3>Filters</h3>
          <div className="filter-tags">
            <span className="tag">Budget</span>
            <span className="tag">Nature</span>
            <span className="tag">Culture</span>
            <span className="tag">Food</span>
          </div>
        </div>

        {/* Places */}
        {filteredPlaces.length > 0 ? (
          filteredPlaces.map(place => (
            <Link to={`/place/${place.id}`} key={place.id}>
              <div className="card place-card">
                <img src={place.image} alt={place.name} />
                <h3>{place.name}</h3>
                <p>{place.category} • ₹{place.budget}</p>
              </div>
            </Link>
          ))
        ) : (
          <div className="card">
            <p>No places found 😕</p>
          </div>
        )}
      </div>

      <div className="bottom-nav">
        <span>Home</span>
        <span className="active">Explore</span>
        <span>Plan</span>
      </div>
    </>
  );
}
