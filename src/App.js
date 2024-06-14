import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("white");
  const [btnText, setBtnText] = useState("Enable dark mode");

  const toggleMode = () => {
    if (mode === "white") {
      setMode("black");
      setBtnText("Enable Light Mode");
    } else {
      setMode("white");
      setBtnText("Enable dark Mode");
    }
  };

  return (
    <>
      <Navbar
        title="Text Utils"
        mode={mode}
        btnText={btnText}
        toggleMode={toggleMode}
      />

      <Routes>
        <Route
          path="/"
          element={
            <TextForm
              heading1="Enter your text to analyze"
              heading2="Text Summary"
            />
          }
        />
        <Route path="/About" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
