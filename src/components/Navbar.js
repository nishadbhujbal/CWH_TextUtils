import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav className="flex justify-between items-center w-full bg-blue-500 p-2 px-6 text-white  ">
        <div id="name" className="font-semibold text-2xl">
          {props.title}
        </div>
        <ul id="menuItems" className="flex gap-4 text-lg font-semibold">
          <li>
            <Link to="/TextForm">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

Navbar.defaultProps = { title: "Set title" };

export default Navbar;
