import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from 's/pages/home';
import About from 's/pages/about';
import Header from 's/components/header';

export default function App() {
    return (
        <Router>
            {/*
            <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>
            */}
            
            <div>
                <Header />
            </div>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
}
