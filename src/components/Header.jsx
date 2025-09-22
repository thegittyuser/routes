import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    {/* talhamughalbrand */}
      <nav className="w-full h-auto bg-[#060f1e] text-white pt-6 pb-6">
        <ul className="flex justify-evenly font-[Poppins]">
          <li className="text-3xl">
            <Link to="/">Home</Link>
          </li>
          <li className="text-3xl">
            <Link to="/services">Services</Link>
          </li>
          <li className="text-3xl">
            <Link to="/about">About</Link>
          </li>
          <li className="text-3xl">
            <Link to="/events">Events</Link>
          </li>
          <li className="text-3xl">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="text-3xl">
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Header;
