const ButtonSubmit = ({ handleOnSubmit }) => {
  return (
    <div className="row">
      <div className="col-6  d-grid-gap-2 mx-auto">
        <button
          onSubmit={handleOnSubmit}
          type="button"
          className="btn btn-primary btn-lg"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export { ButtonSubmit };
