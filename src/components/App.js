import Home from '../pages/Home/Home'
import "../style/style.css";
import Overview from '../pages/Overview/Overview'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import OurStory from '../pages/OurStory/OurStory'

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/our-story" element={<OurStory />} />
      </Routes>
    </div>
  );
}

export default App;
