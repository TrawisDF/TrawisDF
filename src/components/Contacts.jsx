import React, { useState, useRef } from "react";

import "./Contacts.css";
import emailjs from "@emailjs/browser";

const Contacts = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
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
          // Clear form data
          setFormData({
            from_name: "",
            from_email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          alert("Failed to send email.");
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-subcontainer">
            <label>Email: </label>
            <input
              type="email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-subcontainer">
            <label>Message: </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
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
