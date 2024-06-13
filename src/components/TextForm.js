import { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");

  const convertUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const convertLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleWhiteSpace = () => {
    let newText = text.replace(/\s/g, "");
    setText(newText);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const handleItalic = () => {
    let newText = text;
    document.getElementById("para").innerHTML = newText.italics();
    setText(newText);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="mt-20 flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col mt-8 m-4 p-2 lg:p-4 border border-black rounded-2xl lg:flex-row lg:w-[90vh] lg:h-[50vh] ">
          <div className=" w-full lg:w-1/2 p-4 lg:border-r-2">
            <h1 className="text-xl lg:text-3xl my-2 lg:my-4 font-semibold">
              {props.heading1}
            </h1>
            <textarea
              name="text"
              id="myBox"
              className="border border-black rounded-2xl w-full h-[170px] lg:h-1/2 pt-2 px-2 scrollbar-hide"
              value={text}
              onChange={handleOnChange}
            ></textarea>
          </div>

          <div className="w-full lg:w-1/2 p-4">
            <h1 className="text-xl lg:text-3xl my-2 lg:my-4 font-semibold">
              {props.heading2}
            </h1>
            <p className="text-lg">{text.length} characters</p>
            <p className="text-lg">{text.split(" ").length - 1} words</p>
            <p className="text-lg">{text.split(".").length - 1} sentences</p>
            <p className="text-lg">{text.split(" ").length - 1} white spaces</p>
            <p className="text-lg">
              {(0.008 * text.split(" ").length).toFixed(2)} Minutes read
            </p>
          </div>
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-4 md:px-8">
          <button
            className="rounded-xl font-semibold px-6 py-2 border border-blue-500 bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
            onClick={convertUpperCase}
          >
            Convert to Uppercase
          </button>
          <button
            className="rounded-xl font-semibold px-6 py-2 border border-blue-500 bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
            onClick={convertLowerCase}
          >
            Convert to Lowercase
          </button>
          <button
            className="rounded-xl font-semibold px-6 py-2 border border-blue-500 bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
            onClick={handleWhiteSpace}
          >
            Remove White Spaces
          </button>
          <button
            className="rounded-xl font-semibold px-6 py-2 border border-blue-500 bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
            onClick={handleExtraSpaces}
          >
            Remove Extra Spaces
          </button>
          <button
            className="rounded-xl font-semibold px-6 py-2 border border-blue-500 bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
            onClick={handleItalic}
          >
            Convert to Italic
          </button>
          <button
            className="rounded-xl font-semibold px-6 py-2 border border-blue-500 bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            className="rounded-xl font-semibold px-6 py-2 border border-blue-500 bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
            onClick={handleClearClick}
          >
            Clear Text
          </button>
        </div>

        <div id="preview" className="flex flex-col px-8 mb-8  w-full gap-4">
          <h2 className="text-2xl font-semibold">Preview</h2>
          <p id="para" className="text-lg whitespace-pre-wrap break-words">
            {text}
          </p>
        </div>
      </div>
    </>
  );
}
export default TextForm;
