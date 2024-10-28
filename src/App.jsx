import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Teams from './components/Teams';
import Quotes from './components/Quotes';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Teams />
      <Quotes />
      <Footer />
    </>
  );
};

export default App;