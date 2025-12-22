import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Explore Bharat</Link>
      <div>
        <Link to="/explore">Explore</Link>
        <Link to="/hidden-gems">Hidden Gems</Link>
      </div>
    </nav>
  );
}

export default Navbar;
