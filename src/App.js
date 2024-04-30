import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects"

import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#606c38");
  const [afterBackgroundColor, setAfterBackgroundColor] = useState("#606c38");

  const handleButtonClick = () => {
    setBackgroundColor(backgroundColor === "#606c38" ? "black" : "#606c38");
    setAfterBackgroundColor(
      backgroundColor === "#606c38" ? "black" : "#606c38"
    );
  };

  return (
    <div id="main-div" style={{ backgroundColor }}>
      <NavBar
        handleButtonClick={handleButtonClick}
        backgroundColor={backgroundColor}
      />
      <About afterBackgroundColor={afterBackgroundColor} />
      <Projects />
    </div>
  );
}

export default App;
