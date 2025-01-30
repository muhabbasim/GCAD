import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LHomeMain from './pages/home-main';
import LPageAbout from './pages/page-about';
import LPageContact from './pages/page-contact';
import LPageServices from './pages/page-services';
import LPageServicesDetails from './pages/page-services-details';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LHomeMain />} />
        <Route path="/about" element={<LPageAbout />} />
        <Route path="/contact" element={<LPageContact />} />
        <Route path="/services" element={<LPageServices />} />
        <Route path="/services-details/:id" element={<LPageServicesDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
