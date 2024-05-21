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
import CyberPayMerchant from "./screens/cyberPayMerchant";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import IdentityPass from "./screens/identityPass";
import SettlementAutomation from "./screens/settlementAutomation";
import MealManager from "./screens/mealManager";
import Vin from "./screens/vin";
import AutoLoan from "./screens/autoLoan";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/quantum-zenith" element={<QuantumZenith />} />
          <Route path="/parkway" element={<ParkWay />} />
          <Route path="/cipm" element={<CIPM />} />
          <Route path="/heartfelt" element={<Heartfelt />} />
          <Route path="/cyberpay/identity-pass" element={<IdentityPass />} />
          <Route path="/cyberpay/settlement-automation" element={<SettlementAutomation />} />
          <Route path="/vin" element={<Vin />} />
          <Route path="/auto-loan" element={<AutoLoan />} />
        </Route>
        <Route path="/cyberpay/merchant" element={<CyberPayMerchant />} />
        <Route path="/cyberpay/meal-manager" element={<MealManager />} />
      </Routes>
    </Router>
  );
}

export default App;
