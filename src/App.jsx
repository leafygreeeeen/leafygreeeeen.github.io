import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import {SpotifyNowPlaying} from './components/nowPlaying';

export default function App() {
    return (
        <Router>
            <nav style={{ display: 'flex', gap: '1rem', padding: '1rem' }}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>

            <div style={{ padding: '2rem' }}>
                <SpotifyNowPlaying />
            </div>
        </Router>
    );
}
