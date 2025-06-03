// App.jsx
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import './App.css';
function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </>
    );
}
export default App;