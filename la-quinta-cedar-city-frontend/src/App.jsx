import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Header from './components/Header'; // Cambié Navbar por Header que creamos

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header /> {/* Reemplazado Navbar por nuestro Header */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* 
            Componentes no utilizados actualmente (comentados):
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/amenities" element={<Amenities />} />
            <Route path="/contact" element={<Contact />} /> 
          */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;