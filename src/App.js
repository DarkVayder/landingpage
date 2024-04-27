import './App.css';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Navbar from './components/Navbar';
import Newcasestudies from './components/Newcasestudies';
import Newsletter from './components/Newsletter';
import QA from './components/QA';
import Chat from './components/Chat';
import Rwe from './components/Rwe';
import Footer from './components/Footer';

function App() {
  return (
    <div>
       <Navbar /> 
       <Hero />
       <Rwe />
       <Newsletter />
       <Newcasestudies />
       <Mission />
       <QA />
       <Chat />
       <Footer />
    </div>
  );
}

export default App;
