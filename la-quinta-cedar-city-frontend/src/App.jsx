import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
//import Amenities from './pages/Amenities'; // Ensure this path is correct

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Componentes no utilizados actualmente (comentados): */}
          {/* <Route path="/rooms" element={<Rooms />} /> */}
          {/* <Route path="/amenities" element={<Amenities />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;