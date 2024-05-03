import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Layout from "./components/layout";
import Home from "./screens/home";
import Heartfelt from "./screens/heartfelt";
import QuantumZenith from "./screens/quantumZenith";
import ParkWay from "./screens/parkway";
import CIPM from "./screens/cipm";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Router>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/quantum-zenith" element={<QuantumZenith />} />
          <Route path="/parkway" element={<ParkWay />} />
          <Route path="/cipm" element={<CIPM />} />
          <Route path="/heartfelt" element={<Heartfelt />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
