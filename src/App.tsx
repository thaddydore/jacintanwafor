import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import QuantumZenith from './components/quantumZenith';
import ParkWay from './components/parkway';
import CIPM from './components/cipm';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/quantum-zenith' element={<QuantumZenith />} />
        <Route path='/parkway' element={<ParkWay />} />
        <Route path='/cipm' element={<CIPM />} />

      </Routes>
    </Router>
  );
}

export default App;
