import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import {useState} from 'react'



function App() {
  const [backgroundChange, setBackgroundChange] = useState(true)

function toggleChange() {
  setBackgroundChange( backgroundChange => !backgroundChange)
  console.log(backgroundChange)

}

  return (
    <div>
      <NavBar handleClick={toggleChange} />
      <About />
    </div>
  );
}

export default App;
