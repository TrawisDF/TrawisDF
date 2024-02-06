import React, { useState, useRef } from "react";

import "./Contacts.css";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formRef);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
          setEmail("");
          setMessage("");
          setName("");
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send email.");
        }
      );
  };
  return (
    <>
      <div className="image-wrapper img-contact">
        <img src="bear.png" alt="Astroniod" />
      </div>
      <div className="contacts-header">
        <h2>Contacts</h2>
        <p>
          I really appreciate it if you are interested in me. <br />I will reply
          to you back as soon as possible!
        </p>
        <p>
          Tel.{" (+66) 98-884-7142"}
          <br /> You can contact me any time that you want but if it's an
          abnormal time, please buy me a caffeine drink. . . just kidding.
        </p>
      </div>
      <div className="main-contacts">
        <h3>Sent a Contact HERE!</h3>
        <form className="form-adjust" ref={formRef} onSubmit={sendEmail}>
          <div className="form-subcontainer">
            <label>Name: </label>
            <input type="text" name="from_name" required />
          </div>
          <div className="form-subcontainer">
            <label>Email: </label>
            <input type="email" name="from_email" required />
          </div>
          <div className="form-subcontainer">
            <label>Message: </label>
            <textarea name="message" />
          </div>
          <button type="submit" value="Send" required>
            SEND
          </button>
        </form>
      </div>
    </>
  );
};

export default Contacts;
