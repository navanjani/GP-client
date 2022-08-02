const FormDate = ({ label, value, handleOnChange }) => {
  return (
    <div className="row">
      <div className="col-sm-6 offset-sm-3">
        <div className="mb-3 row">
          <label htmlFor="dob" className="col-sm-4 col-form-label">
            {label}
          </label>
          <div className="col-sm-8"></div>
        </div>
      </div>
    </div>
  );
};
export { FormDate };
