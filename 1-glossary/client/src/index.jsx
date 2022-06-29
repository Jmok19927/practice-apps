import React from "react";
import { render } from "react-dom";
import Glossary from "./components/Glossary.jsx";

render(
  <div>
    <p>Hello, World!</p>
    <Glossary/>
  </div>,
  document.getElementById("root")
);
