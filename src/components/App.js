import Home from '../pages/Home/Home'
import "../style/style.css";
import Overview from '../pages/Overview/Overview'
import Header from './Header'
import OurStory from '../pages/OurStory/OurStory'
import OurClients from '../pages/OurClients/OurClients'
import HowItWorks from '../pages/HowItWorks/HowItWorks'

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Overview />
      <OurClients />
      <HowItWorks />
      {/*<OurStory />*/}
    </div>
  );
}

export default App;
