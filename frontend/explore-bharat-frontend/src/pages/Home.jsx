// src/pages/Home.jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?india,travel,tourism')" }}>
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-6xl font-extrabold text-yellow-400 drop-shadow-lg mb-4">Explore Bharat 🇮🇳</h1>
        <p className="text-xl text-white mb-6 max-w-2xl">
          Discover India’s hidden gems, local experiences, and beautiful destinations based on your budget, time, and interests.
        </p>
        <Link to="/explore">
          <button className="bg-yellow-400 text-black font-bold px-8 py-4 rounded-lg hover:bg-yellow-300 transition shadow-lg">
            Start Exploring
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
