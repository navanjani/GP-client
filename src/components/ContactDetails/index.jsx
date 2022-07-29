import { useState, useEffect } from "react";
import "./style.scss";
import { findAllByDisplayValue } from "@testing-library/react";

const ContactDetails = () => {
  const openTime = "08:00:00";
  const closingTime = "16:59:00";
  let time = new Date().toLocaleTimeString();
  const [cTime, setTime] = useState(time);
  useEffect(() => {
    setInterval(() => {
      setTime(time);
    }, []);
    console.log(cTime);
  });
  const timeOpen = cTime > openTime && cTime < closingTime;

  return (
    <div className="contact-wrapper">
      {timeOpen ? (
        <p>
          We are <span className="fw-bold">Open</span>
        </p>
      ) : (
        <p>
          We are <span className="fw-bold">Close</span>
        </p>
      )}
      <p>To make an appoinment </p>
      <p>Call: 020 555 5555</p>
    </div>
  );
};
export { ContactDetails };
