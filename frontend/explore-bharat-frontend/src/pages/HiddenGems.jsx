import { useState } from "react";
import { Link } from "react-router-dom";
import { hiddenGems } from "../data";

function HiddenGems() {
  const [search, setSearch] = useState("");
  const [filterInterest, setFilterInterest] = useState("All");
  const [filterBudget, setFilterBudget] = useState("All");

  const filteredGems = hiddenGems.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.state.toLowerCase().includes(search.toLowerCase());
    const matchesInterest = filterInterest === "All" || d.interest === filterInterest;
    const matchesBudget = filterBudget === "All" || (filterBudget === "<2000" && d.budget < 2000) || (filterBudget === "2000-2500" && d.budget >= 2000 && d.budget <= 2500) || (filterBudget === ">2500" && d.budget > 2500);
    return matchesSearch && matchesInterest && matchesBudget;
  });

  return (
    <div style={{ padding:'2rem', background:'linear-gradient(to right, #ffafbd, #ffc3a0)', minHeight:'100vh' }}>
      <h1 style={{ textAlign:'center', marginBottom:'1.5rem' }}>Hidden Gems of India</h1>

      <div style={{ display:'flex', justifyContent:'center', gap:'1rem', marginBottom:'2rem', flexWrap:'wrap' }}>
        <input type="text" placeholder="Search by name or state" value={search} onChange={e => setSearch(e.target.value)} />
        <select value={filterInterest} onChange={e => setFilterInterest(e.target.value)}>
          <option>All</option>
          <option>Beach</option>
          <option>Adventure</option>
          <option>Culture</option>
        </select>
        <select value={filterBudget} onChange={e => setFilterBudget(e.target.value)}>
          <option value="All">All Budgets</option>
          <option value="<2000">Below ₹2000/day</option>
          <option value="2000-2500">₹2000-₹2500/day</option>
          <option value=">2500">Above ₹2500/day</option>
        </select>
      </div>

      <div className="card-grid">
        {filteredGems.length === 0 ? (
          <p style={{ textAlign:'center', width:'100%' }}>No hidden gems found.</p>
        ) : (
          filteredGems.map(d => (
            <div key={d.id} className="card">
              <img src={d.img} alt={d.name}/>
              <div className="card-content">
                <h2>{d.name}, {d.state}</h2>
                <p>{d.desc}</p>
                <p>Budget: ₹{d.budget}/day | {d.days} days</p>
                <span className="badge">{d.interest}</span>
                <Link to={`/place/${d.id}`}>View Details →</Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HiddenGems;
