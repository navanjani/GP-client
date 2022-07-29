import "./style.scss";
import { ContactDetails } from "../../components";
const HomePage = () => {
  return (
    <div className="container page-container shadow-sm p-3 mb-5 bg-body rounded">
      <div>
        <h1>Welcome to Amsterdam GPs</h1>
      </div>
      <ContactDetails />

      <div className="btn-wrapper d-grid gap-2 col-5 mx-auto">
        <button className="btn btn-primary ">Who is on duty?</button>
      </div>
      <div className="btn-wrapper d-grid gap-2 col-5 mx-auto">
        <button className="btn btn-primary">I'm a new patient</button>
      </div>
    </div>
  );
};
export { HomePage };
