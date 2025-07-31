import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import MyFlashcards from './pages/MyFlashcards';
import OpenTrivia from './pages/OpenTrivia';

function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', backgroundColor: '#eee' }}>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/MyFlashcards">My Flashcards</Link>
        <Link to="/OpenTrivia">OpenTrivia</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/MyFlashcards" element={<MyFlashcards />} />
        <Route path="/OpenTrivia" element={<OpenTrivia />} />
      </Routes>
    </Router>
  );
}

export default App;
