import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//1. iegut elementu no index.html
const elementsNoHTML = document.getElementById("root");

//2 parasto elementu parversana par react sakni
const sakne = ReactDOM.createRoot(elementsNoHTML);

// 3. uz ekrana parada pirmo react komponenti
sakne.render(<App />);