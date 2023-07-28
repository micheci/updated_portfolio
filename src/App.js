import './App.css';
import Header from './Header'
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Teams from './Components/Teams';

function App() {
  return (
    <div className="App">
    
      <Header/>
      {/* <About/> */}
      <Projects/>
      <Contact/>
      {/* <Teams/> */}
    </div>
  );
}

export default App;
