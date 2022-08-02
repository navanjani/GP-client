const FormSelect = ({ label, value, handleOnChange }) => {
  return (
    <div className="row">
      <div className="col-sm-6 offset-sm-3">
        <div className="mb-3 row">
          <label htmlFor="gender" className="col-sm-4 col-form-label">
            {label}
          </label>
          <div className="col-sm-8">
            <select
              className="form-select"
              value={value}
              onChange={handleOnChange}
            >
              <option defaultValue="Gender">Gender</option>
              <option value="1">Male</option>
              <option value="2">Female</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export { FormSelect };
