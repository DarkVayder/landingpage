import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newcasestudies from './components/Newcasestudies';
import Newsletter from './components/Newsletter';
import Rwe from './components/Rwe';

function App() {
  return (
    <div>
       <Navbar /> 
       <Hero />
       <Rwe />
       <Newsletter />
       <Newcasestudies />
    </div>
  );
}

export default App;
