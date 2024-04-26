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
            props.backgroundColor === "#606c38" ? "#606c38" : "black",
        }}
      >
        {props.backgroundColor === "#606c38" ? (
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
