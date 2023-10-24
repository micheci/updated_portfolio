import './App.css';
import Header from './Header'
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Teams from './Components/Teams';
import WorkingOn from './Components/WorkingOn';

function App() {
  return (
    <div className="App">
    
      <Header/>
      
      {/* <About/> */}
      <Projects/>
      <WorkingOn/>
      <Contact/>
      {/* <Teams/> */}
    </div>
  );
}

export default App;
