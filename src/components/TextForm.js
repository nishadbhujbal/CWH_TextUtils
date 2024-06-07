import { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("Enter the text");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  return (
    <>
      <div className="border rounded-xl h-dvh flex flex-col items-center justify-center">
        <h1 className="text-3xl my-4 font-semibold">{props.heading}</h1>
        <textarea
          name="text"
          id="myBox"
          className="border border-black rounded-2xl w-1/2 h-1/3 p-2"
          placeholder="Enter your text"
          value={text}
          onChange={handleOnChange}
        ></textarea>
        <button
          className="rounded-xl font-semibold text-white bg-black px-6 py-2 mt-8"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
      </div>
    </>
  );
}
export default TextForm;
