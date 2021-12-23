import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import About from './About.js';
import Achievements from './Achievements.js';
import Footer from './Footer.js';
function App() {
  return (
    <div className="bg-grey-100">
      <Navbar />
      <Home />
      <About />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;
