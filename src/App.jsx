
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Component/Home';
import About from './Component/About';
import Experience from './Component/Experience';
import Service from './Component/Service';
import Mind from './Component/Mind';
import Contact from './Component/Contact';

function App() {
  return (
    <div style={{backgroundColor:'#f6f7fd'}}>
     <Header />
     <Home />
     <About />
     <Experience />
     <Service />
     <Mind />
     <Contact />
     <Footer />
  
    </div>
  );
}

export default App;
