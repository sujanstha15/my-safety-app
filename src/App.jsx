import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Alerts from './pages/Alerts';
import Resources from './pages/Resources';
import Tips from './pages/Tips';
import Map from './pages/Map';
import Report from './pages/Report';
import Watch from './pages/Watch';  // Import the Watch component
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/tips" element={<Tips />} />
        <Route path="/map" element={<Map />} />
        <Route path="/report" element={<Report />} />
        <Route path="/watch" element={<Watch />} /> {/* Add the Watch route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
