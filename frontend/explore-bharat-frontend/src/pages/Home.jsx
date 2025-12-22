import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero" style={{ backgroundImage:"url('https://wallpaperaccess.com/full/133822.jpg')"}}>
      <div className="hero-content">
        <h1>Explore Bharat 🇮🇳</h1>
        <p>Discover hidden gems, culture, and amazing destinations.</p>
        <Link to="/explore"><button className="btn">Start Exploring</button></Link>
      </div>
    </div>
  );
}

export default Home;
