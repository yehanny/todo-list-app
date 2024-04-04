import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const TASKS = [
  { id: "todo-0", name: "Todo 1", completed: true },
  { id: "todo-1", name: "todo 2", completed: false },
  { id: "todo-2", name: "Todo 3", completed: false },
];
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App tasks={TASKS} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
