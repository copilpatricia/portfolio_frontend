import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import {useState} from 'react'



function App() {

  
  const [color, setColor] = useState(true)
  

function toggleChange() {
  setColor(color => !color)
  console.log(color)
}



  return (
    <div>
      <NavBar handleClick={toggleChange} color={color} />
      <About />
    </div>
  );
}

export default App;
