import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Light Mode");
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 right-0 left-0 flex flex-col-reverse md:flex-row justify-between items-center border-b-2 w-full bg-blue-600 p-2 px-6 text-white gap-2"
        style={myStyle}
      >
        <div>
          <button
            onClick={toggleStyle}
            className="rounded-xl font-semibold p-2 border border-blue-500 bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
          >
            {btnText}
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
