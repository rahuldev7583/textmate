import React, { useState } from "react";
function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // alert("uppercase button clicked");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    // alert("lowercase button clicked");
  };
  const handleCopy = () => {
    let newText = document.getElementById("box");
    newText.select();
    navigator.clipboard.writeText(newText.value);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  let space = /\s+/;
  return (
    <>
      <div
        className={`container rounded-4 bg-${props.mode} text-${
          props.mode === "light" ? "dark" : "light"
        } `}
      >
        <div className="mb-3 p-4">
          <h1>{props.heading}</h1>
          <textarea
            className={`form-control bg-${props.mode} text-${
              props.mode === "light" ? "dark" : "light"
            } `}
            id="box"
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>
          <button onClick={handleUpClick} className="btn btn-primary my-2 mx-1">
            Convert to uppercase
          </button>
          <button onClick={handleLoClick} className="btn btn-primary my-2 mx-1">
            Convert to lowercase
          </button>
          <button onClick={handleCopy} className="btn btn-primary my-2 mx-1">
            Copy Text
          </button>
          <button
            onClick={handleExtraSpaces}
            className="btn btn-primary my-2 mx-1"
          >
            Remove Extra Spaces
          </button>
          <button
            onClick={handleClearClick}
            className="btn btn-primary my-2 mx-1"
          >
            Clear Text
          </button>
        </div>
      </div>
      <div
        className={`container rounded-4 p-4 bg-${props.mode} text-${
          props.mode === "light" ? "dark" : "light"
        } `}
      >
        <h2>Your Text summary</h2>
        <p>
          {text.split(space).filter((element) => {
            return element.length !== 0;
          }).length +
            " words and " +
            text.length +
            " characters"}
        </p>
        <p>{0.008 * text.split(" ").length + " minutes to read"}</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Enter your text to preview here"}</p>
      </div>
    </>
  );
}
export default TextForm;
