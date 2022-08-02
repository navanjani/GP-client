import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";
import {
  DoctorSchedule,
  HomePage,
  PatientDatabase,
  PatientSignup,
} from "./pages";

function App() {
  return (
    <div className="App">
      <NavBar />
      {/*<HomePage />*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/duty" element={<DoctorSchedule />} />
        <Route path="/signup" element={<PatientSignup />} />
        <Route path="/patients" element={<PatientDatabase />} />
      </Routes>
    </div>
  );
}

export default App;
