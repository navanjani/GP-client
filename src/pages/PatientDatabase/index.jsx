import { useEffect, useState } from "react";
import axios from "axios";
import { PatientCard } from "../../components";
import "./style.scss";

const compareName = (patientA, patientB) => {
  return patientA.lastName.localeCompare(patientB.lastName);
};

const PatientDatabase = () => {
  const [patients, setPatients] = useState([]);
  const [displayPatients, setDisplayPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleDoctorChange = (event) => {
    const selected = event.target.value;
    setSelectedDoctor(selected);
    // Filter only when there is a value
    const filteredPatients = selected
      ? patients.filter((patient) => patient.doctorId === selected)
      : patients;
    setDisplayPatients(filteredPatients);
  };

  const getAllPatients = async () => {
    try {
      const response = await axios.get(
        "https://my-json-server.typicode.com/Codaisseur/patient-doctor-data/patients"
      );
      console.log(response);
      setPatients(response.data);
      setDisplayPatients(response.data);
    } catch (e) {
      console.log(e.meesage);
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
  const patientsSorted = [...displayPatients].sort(compareName);
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
      {displayPatients
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
