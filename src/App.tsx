import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Porto from './pages/porto'

function App() {
  return (
    <Router>
      <Routes>


        {/* Halaman portofolio */}
        <Route path="/" element={<Porto />} />


      </Routes>
    </Router>
  );
}

export default App;
