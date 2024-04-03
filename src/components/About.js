function About(props) {
  return (
    <div className="main-container">
      <div className="container-about">
        <div className="fixed-text">Hello, I am</div>
        <div className="animated-text">
          <div>
            <span>Patricia-Maria Muresan</span>
          </div>
        </div>
        <div className="description-about">
          I am a passionate software engineer.I love building apps that are
          delightful to use.
        </div>
      </div>
{/* using the inline style to change the color of the span::after effect when button is clicked  */}
      <style>
        {`
        .animated-text span:after {
          content: "";
          position: absolute;
          left: 0;
          height: 100%;
          border-left: 2px solid #faf3dd;
          right: 0;
          background-color: ${props.afterBackgroundColor};
          animation: 4s textType;
          animation-iteration-count: infinite;
          animation-timing-function: steps(10) ;
          animation-fill-mode: backwards;
        }`}
      </style>
    </div>
  );
}

export default About;
