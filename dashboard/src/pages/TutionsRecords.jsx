import React, { useEffect, useState } from "react";

const TutionRecords = () => {
  // State to store the data from the API
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/Registermodels");
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      setApiData(data);
      handleDelete();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // delete
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/Registermodel/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Update the state to reflect the deletion
      setApiData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="sell__car">
      <div className="sell__car-wrapper">
        <h2>All Register Students</h2>
        <table className="table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Post</th>
              <th>Age</th>
              <th>Education</th>
              <th>Cell Phone</th>
              <th>Address</th>
              <th>Courses</th>
              <th>Prices</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <th>{item.name}</th>
                <th>{item.email}</th>
                <th>{item.password}</th>
                <th>{item.post}</th>
                <th>{item.age}</th>
                <th>{item.education}</th>
                <th>{item.cellPhone}</th>
                <th>{item.address}</th>
                <th>{item.courses}</th>
                <th>{item.prices}</th>
                <td>
                  {/* <a
                    href={`/updateproduct/${item._id}`}
                    className="btn btn-primary"
                  >
                    Edit
                  </a>{" "} */}
                  {/* <button className="btn btn-danger">Delete</button> */}
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TutionRecords;
