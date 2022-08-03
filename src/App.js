import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components";

import {
  DoctorSchedule,
  HomePage,
  PatientDatabase,
  PatientDetails,
  PatientSignup,
} from "./pages";

function App() {
  // const localPatientsStore = [];

  const addPatient = (patient) => {
    console.log(patient);
  };
  return (
    <div className="App">
      <NavBar />
      {/*<HomePage />*/}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/duty" element={<DoctorSchedule />} />
        <Route
          path="/signup"
          element={<PatientSignup addPatient={addPatient} />}
        />
        <Route path="/patients" element={<PatientDatabase />} />
        <Route path="/patients/:patientId" element={<PatientDetails />} />
      </Routes>
    </div>
  );
}

export default App;
