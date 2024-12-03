
function Footer() {
  return (
    
    <div className="footer">
        <hr></hr>
        <div className="col-4">
            <h3>Account</h3>
            <ul>
                <li>Sign In</li>
                <li>Registre</li>
                <li>Order Status</li>
            </ul>
        </div>

        <div className="col-4">
            <h3>About Us</h3>
            <ul>
                <li>Our Story</li>
                <li>Careers</li>
            </ul>
        </div>
        <div className="col-4">
            <h3>Help</h3>
            <ul>
                <li>Contact Us</li>
                <li>Order Status</li>
                <li>Returns</li>
            </ul>
        </div>
        <div className="col-4">
            <h3>Follow Us</h3>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            <div className="footer-social-icons">
                <a href="#"><img src="./icons8-facebook-50.png"></img></a> &nbsp;
                <a href="#"><img src="./icons8-instagram-50.png"></img></a> &nbsp;
                <a href="#"><img src="./icons8-twitter-50.png"></img></a>
            </div>
            </p>
        </div>
        <hr></hr>
        <div className="footer-bottom">
            <div className="footer-links">
                <a href="#">Terms of Use</a> &nbsp;
                <a href="#">Privacy Policy</a>
            </div>
            <div className="footer-copywrite">
                © Company Name Address Ave, City Name, State ZIP
            </div>
            <div className="footer-logo">
                VENIA
            </div>
        </div>
    </div>
  );
}

export default Footer;
