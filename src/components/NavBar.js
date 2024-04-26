function NavBar(props) {
  
  return (
      <nav className="container">
        <div className="list-menu">
          <a href="https://www.google.com/">About</a> 
          <a href="https://www.google.com/">Projects</a>
          <a href="https://www.google.com/">Contact</a>
        </div>
        <button id="mode" onClick={props.handleButtonClick} style={{backgroundColor: props.backgroundColor === "#e6bdb9" ? "#e6bdb9" : "black"}}>
          <i className="fa-solid fa-sun"></i>
        MODE</button>
      </nav>
      
      // <i class="fa-regular fa-moon"></i> // use this for night mode
      // add functionality to href 

   
  
  );
}
export default NavBar;
