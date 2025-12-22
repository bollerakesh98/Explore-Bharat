import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex items-center space-x-4">
      <Link to="/" className="font-bold text-xl">Explore Bharat</Link>
      <Link to="/explore" className="hover:underline">Explore</Link>
      <Link to="/hidden-gems" className="hover:underline">Hidden Gems</Link>
    </nav>
  );
}

export default Navbar;
