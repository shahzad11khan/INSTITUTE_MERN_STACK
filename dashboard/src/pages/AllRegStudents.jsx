import React, { useEffect, useState } from "react";

const Allproducts = () => {
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
  const [getsearch, setgetsearch] = useState("");
  function handleinputchange(e) {
    setgetsearch(e.target.value);
  }
  // console.log(getsearch);
  const filteredStudents = apiData.filter(
    (student) =>
      student.name.toLowerCase().includes(getsearch.toLowerCase()) ||
      student.courses[0].toLowerCase().includes(getsearch.toLowerCase())
    // student.courses[1].toLowerCase().includes(getsearch.toLowerCase())
  );
  return (
    <div className="sell__car">
      <div className="sell__car-wrapper">
        <h2>All Register Students</h2>
        <div>
          <input
            style={{ padding: "5px", width: "400px" }}
            type="text"
            placeholder="Search by Student Name / Subject"
            onChange={handleinputchange}
            value={getsearch}
            name="search"
          />
        </div>
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
              <th>Cnic</th>
              <th>Cell Phone</th>
              <th>Address</th>
              <th>Courses</th>
              <th>Prices</th>
              {/* <th>Total Amount</th> */}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <th>{item.name}</th>
                <th>{item.email}</th>
                <th>{item.password}</th>
                <th>{item.post}</th>
                <th>{item.age}</th>
                <th>{item.qualification}</th>
                <th>{item.cnic}</th>
                <th>{item.cellPhone}</th>
                <th>{item.address}</th>
                <th>{item.courses.join(" ")}</th>
                <th>{item.prices.join(" ")}</th>
                {/* <th>
                  {item.prices.reduce((total, price) => total + price, 0)}
                </th> */}
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

export default Allproducts;
