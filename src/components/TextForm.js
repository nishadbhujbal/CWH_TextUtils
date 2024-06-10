import { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };

  return (
    <>
      <div className="rounded-xl h-full flex flex-col items-center justify-center gap-8">
        <div className="flex flex-row border border-black rounded-2xl w-[90vh] p-4 h-[50vh] mt-8">
          <div className="w-1/2 p-4 border-r-2">
            <h1 className="text-3xl my-4 font-semibold">{props.heading1}</h1>
            <textarea
              name="text"
              id="myBox"
              className="border border-black rounded-2xl w-full h-1/2 pt-2 px-2 scrollbar-hide"
              value={text}
              onChange={handleOnChange}
            ></textarea>
          </div>

          <div className="w-1/2 p-4">
            <h1 className="text-3xl my-4 font-semibold">{props.heading2}</h1>
            <p className="text-lg">{text.split(" ").length} words</p>
            <p className="text-lg">{text.length} characters</p>
            <p className="text-lg">
              {(0.008 * text.split(" ").length).toFixed(2)} Minutes read
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center gap-4">
          <button
            className="rounded-xl font-semibold border border-blue-500 text-blue-500 bg-white px-6 py-2 hover:bg-blue-500 hover:text-white"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            className="rounded-xl font-semibold border border-blue-500 text-blue-500 bg-white px-6 py-2 hover:bg-blue-500 hover:text-white"
            onClick={handleLowClick}
          >
            Convert to Lowercase
          </button>
        </div>

        <div id="preview" className="flex flex-col mx-16 mb-8">
          <h2 className="text-2xl font-semibold">Preview</h2>
          {text}
        </div>
      </div>
    </>
  );
}
export default TextForm;
