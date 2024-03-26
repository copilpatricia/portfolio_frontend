function NavBar() {
  return (
      <nav className="container">
        <div className="list-menu">
          <a href="https://www.w3schools.com/html/html_links.asp">About</a> 
          <a href="https://www.w3schools.com/html/html_links.asp">Projects</a>
          <a href="https://www.w3schools.com/html/html_links.asp">Contact</a>
        </div>
        <p id="mode"><i class="fa-solid fa-sun"></i>MODE</p>
      </nav>
      
      // <i class="fa-regular fa-moon"></i> // use this for night mode
  
  );
}
export default NavBar;
