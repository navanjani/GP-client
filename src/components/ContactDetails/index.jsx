import "./style.scss";

const ContactDetails = () => {
  const openTime = "08:00:00";
  const closingTime = "16:59:00";
  const currentTime = new Date().toLocaleTimeString();
  const timeOpen = currentTime > openTime && currentTime < closingTime;

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
