import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/services" element={<Services />} exact />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
    </Router>
  );
}

export default App;
