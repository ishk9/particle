import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './Landingpage/page';
import PricingPage from './Pricingpage/page';

function App() {
  return (
    <div className="min-h-screen bg-black bg-gradient-to-tr from-zinc-900/50 to-zinc-700/30">
      <Navbar />
      <LandingPage />
      {/* <PricingPage /> */}
    </div>
  );
}

export default App;
