import { useEffect, useState } from "react";
import axios from "axios";
import { ContactDetails } from "../../components";

const DoctorSchedule = () => {
  const [doctors, setDoctors] = useState([]);
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
  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <div className="container page-container shadow-sm p-3 mb-5 bg-body rounded">
      <h1> Who is on duty ? </h1>
      {doctors
        ? doctors.map((doctor, index) => (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col3">Doctor</th>
                  <th scope="col-3">Availability</th>
                </tr>
              </thead>
              <tbody key={index}>
                <tr>
                  <th>{doctor.doctor}</th>
                  <th>{doctor.onduty ? "on duty" : "off duty"}</th>
                </tr>
              </tbody>
            </table>
          ))
        : "Loading ..."}
      <ContactDetails />
    </div>
  );
};
export { DoctorSchedule };
