
function Navbar(props) {
  const handleClick = () => {
    props.handleClickOnNavBar();
  }
  return (
    <nav className="navbar">
        <div className="navbar-title">Venia</div>
        <div className="nav-links">
            <a className="active" href="#home">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
        <div className="navbar-three-bar-icon">
          <img src="./download.png" width="16px" height="16px" id="navbar-three-bar-img" onClick={handleClick}/>
        </div>
        <div className="navbar-notification-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24">
              <g>
                  <path fill="none" d="M0 0h24v24H0z"/>
                  <path fill-rule="nonzero" d="M12 2a7 7 0 0 1 7 7h1.074a1 1 0 0 1 .997.923l.846 11a1 1 0 0 1-.92 1.074L20.92 22H3.08a1 1 0 0 1-1-1l.003-.077.846-11A1 1 0 0 1 3.926 9H5a7 7 0 0 1 7-7zm7.147 9H4.852l-.693 9H19.84l-.693-9zM14 13v2h-4v-2h4zm-2-9a5 5 0 0 0-4.995 4.783L7 9h10a5 5 0 0 0-4.783-4.995L12 4z" fill="#ffffff"/>
              </g>
          </svg>
          <sup>10</sup>
        </div>
    </nav>
  );
}

export default Navbar;
