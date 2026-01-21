import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { DiscoveryCall } from './pages/DiscoveryCall';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discovery-call" element={<DiscoveryCall />} />
      </Routes>
    </Router>
  );
}

export default App;