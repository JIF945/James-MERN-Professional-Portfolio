import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [validationMessage, setValidationMessages] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, Value } = e.target;
    setFormData({
      ...formData,
      [name]: Value,
    });
    //  clearing message after user types
    setValidationMessages((prevMessages) => ({
      ...prevMessages,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newValidationMessages = {};
    if (!formData.name) {
      newValidationMessages.name = "name is required";
    }
    if (!formData.email) {
      newValidationMessages.email = " email is required";
    }
    if (!formData.message) {
      newValidationMessages.message = "Message is required";
    }

    if (Object.keys(newValidationMessages).length > 0) {
      setValidationMessages(newValidationMessages);
      return;
    }

    // logic to handle form submission, data being sent to server

    console.log("Form Data:", formData);

    // reset form fields and validation messages
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setValidationMessages({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6"></div>
          <h2> Contact me</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {/* message for email */}
              {validationMessage.email && (
                <div className="alert alert-danger" role="alert">
                  {validationMessage.name}
                </div>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {/*validation for email  */}
              {validationMessage.email && (
                <div className="alert alert-danger" role="alert">
                  {validationMessage.email}
                </div>
              )}
            </div>
            <div className="md-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={{ height: "300px" }}
                required
              ></textarea>
              {/* validation for message */}
              {validationMessage.message && (
                <div className="alert alert-danger" role="alert">
                  {validationMessage.message}
                </div>
              )}
            </div>
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
