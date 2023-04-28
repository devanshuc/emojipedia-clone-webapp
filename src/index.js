import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"));

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
