import React from "react";
import "../styles/bookings.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import axios from "axios";

const LanguageTut = () => {
  const [formData, setFormData] = useState({
    language: "",
    name: "",
    shortDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    try {
      // Send data to the server (replace 'http://localhost:5000/api/products' with your server URL and endpoint)
      const response = await axios.post(
        "http://localhost:5000/api/languages", // Update the endpoint accordingly
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title">Add User</h2>
        <h2>Add Language Tutor Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="language" className="form-label">
              Language
            </label>
            <input
              type="text"
              className="form-control"
              id="language"
              name="language"
              value={formData.courses}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="shortDescription" className="form-label">
              shortDescription
            </label>
            <input
              type="text"
              className="form-control"
              id="shortDescription"
              name="shortDescription"
              value={formData.shortDescription}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LanguageTut;
