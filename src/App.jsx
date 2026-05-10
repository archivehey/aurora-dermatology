import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Signature from './pages/Signature';
import ProgramList from './pages/ProgramList';
import LocationPage from './pages/LocationPage';
import ReservationModal from './components/common/ReservationModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar onOpenModal={openModal} />
        <Sidebar onOpenModal={openModal} />
        <main>
          <Routes>
            <Route path="/" element={<Home onOpenModal={openModal} />} />
            <Route path="/about" element={<About onOpenModal={openModal} />} />
            <Route path="/signature" element={<Signature onOpenModal={openModal} />} />
            <Route path="/programs" element={<ProgramList onOpenModal={openModal} />} />
            <Route path="/location" element={<LocationPage onOpenModal={openModal} />} />
          </Routes>
        </main>
        <Footer />
        <ReservationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
