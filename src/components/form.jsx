import React, { useState } from "react";
import "../index.css";

function TextArea(props) {
  const copyToClipboard = () => {
    let text = document.getElementById("text");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const removeExtraSpacing = () => {
    let textWoSpace = text.split(/[ ]+/).join(" ");
    setText(textWoSpace);
  };

  const handleUpperCase = (e) => {
    let uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  };

  const handleLowerCase = (e) => {
    let lowercaseText = text.toLowerCase();
    setText(lowercaseText);
  };

  const handleBinary = (e) => {
    let binary;
    binary = "";
    for (let i = 0; i < text.length; i++) {
      binary += text[i].charCodeAt(0).toString(2) + " ";
      setText(binary);
    }
  };

  const handleReset = () => {
    let reset = "";
    setText(reset);
  };
  const handleOnchange = (e) => {
    setText(e.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <h1 className="py-2 mx-4">Text Utilities⌨️</h1>
      <div className="container py-4">
        <div className="input-group">
          <textarea
            style={{
              backgroundColor: "transparent",
              color: props.mode === "light" ? "black" : "white",
              border:
                props.mode === "light" ? "1px solid black" : "1px solid white",
            }}
            id="text"
            className="form-control"
            rows={10}
            value={text}
            onChange={handleOnchange}
            placeholder="Enter Your Text Here"
          ></textarea>
        </div>
        <div className="conatiner text-center">
          <button
            style={{
              backgroundColor: "transparent",
              color: props.mode === "light" ? "black" : "white",
              border:
                props.mode === "light" ? "1px solid black" : "1px solid white",
            }}
            className="btn btn-outline-dark mx-2 my-3"
            onClick={handleUpperCase}
          >
            Convert to uppercase
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              color: props.mode === "light" ? "black" : "white",
              border:
                props.mode === "light" ? "1px solid black" : "1px solid white",
            }}
            className="btn btn-outline-dark mx-2 my-3"
            onClick={handleLowerCase}
          >
            Convert to lowercase
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              color: props.mode === "light" ? "black" : "white",
              border:
                props.mode === "light" ? "1px solid black" : "1px solid white",
            }}
            className="btn btn-outline-dark mx-2 my-2 "
            onClick={handleBinary}
          >
            Convert to binary
          </button>

          <button
            style={{
              backgroundColor: "transparent",
              color: props.mode === "light" ? "black" : "white",
              border:
                props.mode === "light" ? "1px solid black" : "1px solid white",
            }}
            className="btn btn-outline-dark mx-2 my-2 "
            onClick={removeExtraSpacing}
          >
            Remove extra spaces
          </button>

          <button
            style={{
              backgroundColor: "transparent",
              color: props.mode === "light" ? "black" : "white",
              border:
                props.mode === "light" ? "1px solid black" : "1px solid white",
            }}
            className="btn btn-outline-dark mx-2 my-2 "
            onClick={copyToClipboard}
          >
            Copy to clipboard
          </button>

          <button
            style={{
              backgroundColor: "transparent",
              color: props.mode === "light" ? "black" : "white",
              border:
                props.mode === "light" ? "1px solid black" : "1px solid white",
            }}
            className="btn btn-outline-dark mx-2 my-2 "
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <div className="my-5 container">
          <h4>Your Text Summary</h4>
          <p>
            {text.split(" ").length} <b> words </b>
            {text.length}
            <b> characters</b>
            <br />
            {Math.round(0.08 * text.split(" ").length)}
            <b> Minutes Read </b>
          </p>
          <div
            className="py-2"
            style={{
              backgroundColor: "transparent",
              color: props.mode === "light" ? "black" : "white",
              border:
                props.mode === "light" ? "1px solid black" : "1px solid white",
            }}
          >
            <h5>Preview</h5>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextArea;
