import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Text Utils" />
      <TextForm heading1="Enter your text to analyze" heading2="Text Summary" />
    </>
  );
}

export default App;
