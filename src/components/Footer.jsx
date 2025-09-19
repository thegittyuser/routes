import { Link } from "react-router-dom";
import "../assets/css/footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <p>&copy; All Rights Reserved.</p>
        <p>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </p>
      </div>
    </>
  );
}
export default Footer;
