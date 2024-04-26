function NavBar(props) {
  return (
    <nav className="container">
      <div className="list-menu">
        <a href="https://www.google.com/">About</a>
        <a href="https://www.google.com/">Projects</a>
        <a href="https://www.google.com/">Contact</a>
      </div>
      <button
        id="mode"
        onClick={props.handleButtonClick}
        style={{
          backgroundColor:
            props.backgroundColor === "#e6bdb9" ? "#e6bdb9" : "black",
        }}
      >
        {props.backgroundColor === "#e6bdb9" ? (
          <i className="fa-solid fa-sun"></i>
        ) : (
          <i class="fa-regular fa-moon"></i>
        )}
        MODE
      </button>
    </nav>
  );
}
export default NavBar;
