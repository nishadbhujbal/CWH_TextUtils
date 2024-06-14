import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [btnText, setBtnText] = useState("Enable dark mode");

  const toggleMode = () => {
    if (mode === "white") {
      setMode("black");
      setTextColor("white");
      setBtnText("Enable Light Mode");
    } else {
      setMode("white");
      setTextColor("black");
      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <>
      <Navbar
        title="Text Utils"
        mode={mode}
        textColor={textColor}
        toggleMode={toggleMode}
        btnText={btnText}
      />

      <Routes>
        <Route
          path="/"
          element={
            <TextForm
              heading1="Enter your text to analyze"
              heading2="Text Summary"
              mode={mode}
              textColor={textColor}
              toggleMode={toggleMode}
            />
          }
        />
        <Route
          path="/About"
          element={
            <About mode={mode} textColor={textColor} toggleMode={toggleMode} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
