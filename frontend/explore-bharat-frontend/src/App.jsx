import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import HiddenGems from "./pages/HiddenGems";
import PlaceDetails from "./pages/PlaceDetails";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/hidden-gems" element={<HiddenGems />} />
        <Route path="/place/:id" element={<PlaceDetails />} />
      </Routes>
    </>
  );
}

export default App;
