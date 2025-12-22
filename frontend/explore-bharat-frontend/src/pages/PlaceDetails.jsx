import { useParams, Link } from "react-router-dom";
import { destinations, hiddenGems } from "../data";

function PlaceDetails() {
  const { id } = useParams();
  const allPlaces = [...destinations, ...hiddenGems]; // merge arrays
  const place = allPlaces.find(p => p.id === parseInt(id));

  if(!place) return <p style={{ textAlign:'center', marginTop:'2rem' }}>Place not found.</p>;

  return (
    <div style={{ padding:'2rem', minHeight:'100vh', background:'#f0f4f8' }}>
      <Link to="/" style={{ display:'inline-block', marginBottom:'1rem', color:'#2196f3' }}>← Back</Link>
      <div style={{ display:'flex', flexWrap:'wrap', gap:'2rem', alignItems:'flex-start' }}>
        <img src={place.img} alt={place.name} style={{ flex:'1 1 400px', borderRadius:'1rem', objectFit:'cover', maxHeight:'500px' }}/>
        <div style={{ flex:'1 1 400px' }}>
          <h1 style={{ fontSize:'2.5rem', marginBottom:'1rem' }}>{place.name}, {place.state}</h1>
          <p style={{ fontSize:'1.2rem', marginBottom:'1rem' }}>{place.desc}</p>
          <p style={{ marginBottom:'0.5rem' }}><strong>Budget:</strong> ₹{place.budget}/day</p>
          <p style={{ marginBottom:'0.5rem' }}><strong>Days:</strong> {place.days}</p>
          <span className="badge">{place.interest}</span>
        </div>
      </div>
    </div>
  );
}

export default PlaceDetails;
