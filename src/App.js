import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="Text Utils" />

      <Routes>
        <Route
          path="/TextForm"
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
