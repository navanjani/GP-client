import { useState } from "react";
import "./style.scss";
import {
  FormInput,
  FormSelect,
  FormDate,
  ButtonSubmit,
} from "../../components";

const PatientSignup = (CreateNewPatient) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      CreateNewPatient({
        firstName,
        lastName,
        gender,
        dateOfBirth,
        email,
        phone,
      });
      alert("successfully Signup!");
      console.log({ patient: { firstName } });
      resetForm();
    } else {
      alert("Invalid Form!");
    }
  };
  const validateForm = () => {
    let valid = true;
    if (
      firstName === "" ||
      lastName === "" ||
      phone === "" ||
      gender === "" ||
      dateOfBirth === ""
    ) {
      valid = false;
    }
    return valid;
  };
  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setPhone("");
    setGender("");
    setEmail("");
    setDateOfBirth("");
  };
  return (
    <div className="container page-container shadow-sm p-3 mb-5 bg-body rounded">
      <h1> Patient Signup</h1>

      <form onSubmit={handleSubmit}>
        <FormInput
          label={"First Name:"}
          value={firstName}
          handleOnChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <FormInput
          label={"Last Name:"}
          value={lastName}
          handleOnChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <FormInput
          label={"Email:"}
          value={email}
          handleOnChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <FormInput
          label={"Phone Number:"}
          value={phone}
          handleOnChange={(event) => {
            setPhone(event.target.value);
          }}
        />
        <FormSelect
          label={"Gender"}
          value={gender}
          handleOnChange={(event) => {
            setGender(event.target.value);
          }}
        />
        <FormDate
          label={"Date Of Birth:"}
          value={dateOfBirth}
          handleOnChange={(event) => {
            setDateOfBirth(event.target.value);
          }}
        />
        <ButtonSubmit handleOnSubmit={handleSubmit} />
      </form>
    </div>
  );
};
export { PatientSignup };
