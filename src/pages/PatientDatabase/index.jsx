import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { PatientCard } from "../../components";
import "./style.scss";

const compareName = (patientA, patientB) => {
  return patientA.lastName.localeCompare(patientB.lastName);
};

const PatientDatabase = () => {
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorChange = (event) => {
    const selected = event.target.value;
    setSelectedDoctor(parseInt(selected));
  };

  const getAllPatients = async () => {
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
      );
      setPatients(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };
  const getDoctors = async () => {
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/doctors"
      );
      console.log(response);
      setDoctors(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };

  const filteredPatients = useMemo(
    () =>
      patients.filter((patient) => {
        return selectedDoctor > 0 ? patient.doctorId === selectedDoctor : true;
      }),
    [patients, selectedDoctor]
  );

  const patientsSorted = [...filteredPatients].sort(compareName);

  useEffect(() => {
    getAllPatients();
    getDoctors();
  }, []);

  return (
    <div className="container page-container shadow-sm p-3 mb-5 bg-body rounded">
      <h1>Patient Database</h1>

      <p> Doctors: </p>
      <p>
        {doctors ? (
          <select value={selectedDoctor} onChange={handleDoctorChange}>
            <option value=""></option>
            {doctors.map((doctor, index) => (
              <option key={index} value={doctor.id}>
                {doctor.doctor}
              </option>
            ))}
          </select>
        ) : (
          "Loading doctors.."
        )}
      </p>
      {patientsSorted
        ? patientsSorted.map((patient, index) => (
            <PatientCard
              key={index}
              name={patient.firstName + " " + patient.lastName}
              id={patient.id}
              dateofbirth={patient.dateOfBirth}
            />
          ))
        : "Loading.."}
    </div>
  );
};
export { PatientDatabase };
