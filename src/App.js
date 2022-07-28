import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import { HomePage } from "./pages";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
