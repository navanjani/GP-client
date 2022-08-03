import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../config";
import "./style.scss";

const PatientDetails = () => {
  const params = useParams();
  const { patientId } = params;
  const [patient, setPatient] = useState(null);

  const getPatient = async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/patients/${id}`);
      console.log(response);
      setPatient(response.data);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    getPatient(patientId);
  }, [patientId]);

  return (
    <div className="container page-container shadow-sm p-3 mb-5 bg-body rounded">
      {patient ? (
        <div className="card detail-card">
          <h2> {patient.firstName + " " + patient.lastName}</h2>
          <p> ID : {patient.id} </p>
          <p> Date Of Birth : {patient.dateOfBirth} </p>
          <p> Gender : {patient.gender} </p>
          <p>
            Contact Details :
            <ul>
              <li>Email : {patient.email} </li>
              <li>Phone Number : {patient.phone}</li>
            </ul>
          </p>
          <p>
            Precriptions :
            <ul>
              {patient.prescriptions.map((prescription, index) => (
                <li key={index}>{prescription}</li>
              ))}
            </ul>
          </p>
        </div>
      ) : (
        "Loading Patient.."
      )}
    </div>
  );
};
export { PatientDetails };
