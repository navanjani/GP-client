import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import { DoctorSchedule, HomePage } from "./pages";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/*<HomePage />*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/duty" element={<DoctorSchedule />} />
      </Routes>
    </div>
  );
}

export default App;
