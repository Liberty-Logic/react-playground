import React from "react";
import ReactDOM from "react-dom/client";
import { Clock } from "./components/clock/clock";

const App: React.FC = () => {
  return <Clock width={20}></Clock>;
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(<App />);
