import "./index.css";
import TextArea from "./components/form";
import Nav from "./components/Nav";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert([message, type]);
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#242526";
      document.body.style.color = "#b0b4b8";
      showAlert("Enabled Dark Mode🌙");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#b0b3b8";
      document.body.style.color = "#242526";
      showAlert("Enabled Light Mode🌞");
    }
  };
  return (
    <div>
      <Nav mode={mode} toggleMode={toggleMode} />
      <Alert message={alert} />
      <TextArea mode={mode} showAlert={showAlert} />
    </div>
  );
}

export default App;
