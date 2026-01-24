import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { DiscoveryCall } from './pages/DiscoveryCall';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discovery-call" element={<DiscoveryCall />} />
      </Routes>
    </Router>
  );
}

export default App;