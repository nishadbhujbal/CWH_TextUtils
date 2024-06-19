import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("white");
  const [textColor, setTextColor] = useState("black");
  const [btnText, setBtnText] = useState("Enable dark mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleMode = () => {
    if (mode === "white") {
      setMode("black");
      setTextColor("white");
      setBtnText("Enable Light Mode");
      document.body.style.backgroundColor = "#111827";
      showAlert("Dark mode activated", "Success");
    } else {
      setMode("white");
      setTextColor("black");
      setBtnText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode activated", "Success");
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
      <Alert alert={alert} />

      <Routes>
        <Route
          path="/"
          element={
            <TextForm
              heading1="Enter your text to analyze"
              heading2="Text Summary"
              toggleMode={toggleMode}
              textColor={textColor}
              mode={mode}
              showAlert={showAlert}
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
