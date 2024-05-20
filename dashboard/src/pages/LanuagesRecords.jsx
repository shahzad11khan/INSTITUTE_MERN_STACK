import React, { useEffect, useState, useRef } from "react";
import { DownloadTableExcel } from "react-export-table-to-excel";
import { useDownloadExcel } from "react-export-table-to-excel";
const LanguagesRecords = () => {
  const tableRef = useRef(null);
  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });
  // State to store the data from the API
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/RegisterLang");
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
        `http://localhost:5000/api/RegisterLang/${id}`,
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
  const filteredStudents = apiData.filter((student) => {
    const lowerCaseSearch = getsearch.toLowerCase();
    return (
      student.teacherName.toLowerCase().includes(lowerCaseSearch) ||
      student.name.toLowerCase().includes(lowerCaseSearch) ||
      student.courses.some((course) =>
        course.toLowerCase().includes(lowerCaseSearch)
      )
    );
  });
  // Function to generate export data with specific fields
  const generateExportData = () => {
    return filteredStudents.map((item) => ({
      Teacher_Name: item.teacherName,
      Student_Name: item.name,
    }));
  };

  return (
    <div className="sell__car">
      <div className="sell__car-wrapper">
        <h2>All Register Students In Courses</h2>
        <div>
          <input
            style={{ padding: "5px", width: "400px" }}
            type="text"
            placeholder="Enter teacher name or subject or student name"
            onChange={handleinputchange}
            value={getsearch}
            name="search"
          />
          <DownloadTableExcel
            filename="Students Records"
            sheet="users"
            currentTableRef={tableRef.current}
            data={generateExportData()} // Pass the generated export data here
          >
            <button
              style={{ marginLeft: "5px", padding: "5px", width: "400px" }}
            >
              {" "}
              Students Recordes Printed{" "}
            </button>
          </DownloadTableExcel>

          {/* <button onClick={onDownload}> Export excel </button> */}
        </div>
        <table className="table" ref={tableRef}>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Teacher Name</th>
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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <th>{item.teacherName}</th>
                <th>{item.name}</th>
                <th>{item.email}</th>
                <th>{item.password}</th>
                <th>{item.post}</th>
                <th>{item.age}</th>
                <th>{item.qualification}</th>
                <th>{item.cnic}</th>
                <th>{item.cellPhone}</th>
                <th>{item.address}</th>
                <th>
                  {item.courses[0]} / {item.courses[1]}
                </th>
                <th>
                  {item.prices[0]} / {item.prices[1]}
                </th>
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

export default LanguagesRecords;
