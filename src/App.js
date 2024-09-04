import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects"
import AboutMe from "./components/AboutMe"

import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("#606c38");
  const [afterBackgroundColor, setAfterBackgroundColor] = useState("#606c38");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:4000/api/projects/");
      const data = await res.json();
      console.log(data);
      setProjects(data);
    }
    fetchData();
  }, [])

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
      <Projects projects={projects} />
      <AboutMe />

    </div>
  );
}

export default App;
