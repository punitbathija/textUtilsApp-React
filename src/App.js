import "./index.css";
import TextArea from "./components/form";
import Nav from "./components/Nav";

import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#242526";
      document.body.style.color = "#b0b4b8";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#b0b3b8";
      document.body.style.color = "#242526";
    }
  };
  return (
    <div>
      <Nav mode={mode} toggleMode={toggleMode} />
      <TextArea mode={mode} />
    </div>
  );
}

export default App;
