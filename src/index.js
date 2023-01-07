import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CharactersBox from "./components/CharactersBox";
import Overlay from "./components/Overlay";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <CharactersBox />
    <Overlay />
  </>
);
