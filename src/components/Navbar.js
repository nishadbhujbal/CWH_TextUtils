import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <>
      <nav
        className={`absolute top-0 right-0 left-0 flex flex-col-reverse md:flex-row justify-between items-center border-b-2 w-full p-2 px-6  gap-2 bg-${props.mode} text-${props.textColor}`}
      >
        <div>
          <button
            className="text-white bg-blue-600 rounded-xl p-2 font-semibold hover:bg-blue-600/50"
            onClick={props.toggleMode}
          >
            {props.btnText}
          </button>
        </div>
        <div className="flex flex-row justify-around md:justify-between items-center w-full md:w-1/2">
          <div id="name" className="font-semibold text-2xl ">
            {props.title}
          </div>
          <ul id="menuItems" className="flex gap-4 text-lg font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

Navbar.defaultProps = { title: "Set title" };

export default Navbar;
