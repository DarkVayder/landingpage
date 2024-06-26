import './App.css';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Navbar from './components/Navbar';
import Mkt from './components/Mkt';
import Newcasestudies from './components/Newcasestudies';
import QA from './components/QA';
import Chat from './components/Chat';
import Cs from './components/Cs';
import Rates from './components/Rates'
import Rwe from './components/Rwe';
import Footer from './components/Footer';

function App() {
  return (
    <div>
       <Navbar /> 
       <Hero />
       <Rwe />
       <Mkt />
       <Newcasestudies />
       <Mission />
       <QA />
       <Chat />
       <Cs />
       <Rates />
       <Footer />
    </div>
  );
}

export default App;
