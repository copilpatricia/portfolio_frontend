function NavBar() {
  return (
      <nav className="container">
        <div className="list-menu">
          <a href="https://www.google.com/">About</a> 
          <a href="https://www.google.com/">Projects</a>
          <a href="https://www.google.com/">Contact</a>
        </div>
        <p id="mode"><i className="fa-solid fa-sun"></i>MODE</p>
      </nav>
      
      // <i class="fa-regular fa-moon"></i> // use this for night mode
      // add functionality to href 
  
  );
}
export default NavBar;
