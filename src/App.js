import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [backgroundColor, setBackgroundColor] = useState("#e6bdb9");
  const [afterBackgroundColor, setAfterBackgroundColor] = useState("#e6bdb9");

  const handleButtonClick = () => {
    setBackgroundColor(backgroundColor === "#e6bdb9" ? "black" : "#e6bdb9");
    setAfterBackgroundColor(
      backgroundColor === "#e6bdb9" ? "black" : "#e6bdb9"
    );
  };

  return (
    <div id="main-div" style={{ backgroundColor }}>
      <NavBar
        handleButtonClick={handleButtonClick}
        backgroundColor={backgroundColor}
      />
      <About afterBackgroundColor={afterBackgroundColor} />
    </div>
  );
}

export default App;
