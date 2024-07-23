import "./App.css";
import NavBar1 from "./components/NavBar1.js";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert.js";
import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  const [mode, setmode] = useState("light"); // Dark mode enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "rgb(28 70 111)";
      showAlert("DarkMode has been applied", "Sucess");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "rgb(54 162 188)";
      showAlert("LightMode has been applied", "Sucess");
    }
  };
  return (
    // <h1></h1> it can be show an error because in this app function you can do all work in one single tag not many
    <>
       <Router>
        <NavBar1
          title="TextUtils"
          AboutMe="About Us"
          style={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm heading="Enter commands" showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
