import Nav from "./Nav";
import { Colours, Colour, ColourForm } from "./pages";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import { Navigate, useNavigate } from "react-router-dom";

import data from "./config/data.json";

function App() {
  let [allColours, setAllColours] = useState([]);
  const navigate = useNavigate();

  const addColour = (e) => {
    e.preventDefault();

    let data = new FormData(e.target);

    let newColour = {
      name: data.get("colour-name"),
      hex: data.get("hex-value"),
    };

    setAllColours((prev) => [...prev, newColour]);
    navigate("/colours");
  };

  useEffect(() => {
    setAllColours(data);
  }, []);

  return (
    <>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to={"/colours"} />} />
          <Route
            path="/colours"
            element={<Colours allColours={allColours} />}
          />
          <Route
            path="/colours/:colour"
            element={<Colour allColours={allColours} />}
          />
          <Route
            path="/colours/new"
            element={<ColourForm onSubmitForm={addColour} />}
          />

          <Route path="/*" element={<Navigate to={"/colours"} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
