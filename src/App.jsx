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
                    <Route path="/wadu/home" element={<Home/>} />
                    <Route path="/wadu" element={<Home/>} />
                    <Route path="/wadu/about" element={<About />} />
                    <Route path="/wadu/contact" element={<Contact />} />
                </Routes>
            </Router>
        </>
    );
}
export default App;