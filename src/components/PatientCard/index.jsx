import "./style.scss";
const PatientCard = ({ name, id, dateofbirth }) => {
  return (
    <div className="card patient-card">
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">Patient ID : {id}</p>
        <p className="card-text">Date of Birth : {dateofbirth}</p>
        <button className="btn btn-primary"> Show Details</button>
      </div>
    </div>
  );
};
export { PatientCard };
