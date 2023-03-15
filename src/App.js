import logo from './logo.svg';
import './App.css';
import Header from './Header'
import About from './Components/About';
import Projects from './Components/Projects';


function App() {
  return (
    <div className="App">
    
      <Header/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
