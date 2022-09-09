import Home from '../pages/Home/Home'
import "../style/style.css";
import Overview from '../pages/Overview/Overview'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import OurStory from '../pages/OurStory/OurStory'
import OurClients from '../pages/OurClients/OurClients'
import HowItWorks from '../pages/HowItWorks/HowItWorks'

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/our-clients" element={<OurClients />} />
        <Route path="/hot-in-works" element={<HowItWorks />} />
      </Routes>
    </div>
  );
}

export default App;
