import { Link, Routes, Route } from 'react-router-dom';
//import { Home } from '~/pages/Home' 
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Contact } from '@/pages/Contact';
import App from '@/App';

function HomePageNavigation() {
    return (
        <>
            <p>HomePageNavigation</p>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/about">About</Link> |{" "}
                <Link to="/contact">Contact</Link> |{" "}
                <Link to="/app">App default</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/app" element={<App />} />
            </Routes>
        </>
    );
}

export default HomePageNavigation;