import React, { useState } from "react";
import "../styles/bookings.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const AddStaff = () => {
  const [formData, setFormData] = useState({
    username: "",
    image: null,
    ShortDescription: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "image") {
      // If the target is an image, set the file itself, not the value
      setFormData((prevData) => ({
        ...prevData,
        [e.target.name]: e.target.files[0],
      }));
    } else {
      // For other inputs, update the value as usual
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    try {
      // Create form data to append the file to the request
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.username);
      formDataToSend.append("shortDescription", formData.ShortDescription);
      formDataToSend.append("image", formData.image);

      // Send data to the server
      const response = await axios.post(
        "http://localhost:5000/api/imageposts",
        formDataToSend
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
        <h2>Add Staff Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              About Staff
            </label>
            <input
              type="text"
              className="form-control"
              id="ShortDescription"
              name="ShortDescription"
              value={formData.ShortDescription}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">
              Image
            </label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
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

export default AddStaff;
