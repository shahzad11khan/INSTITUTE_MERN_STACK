import React, { useEffect, useState } from "react";

const FeeRecords = () => {
  const [apiData, setApiData] = useState([]);
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/payments/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Update the state to reflect the deletion
      setApiData((prevData) => prevData.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/payments");
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log(data);
      setApiData(data);
      // handleDelete();
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const Approvehandle = async (itemId) => {
    try {
      // Send a PUT request to update the 'approve' field
      const response = await fetch(
        `http://localhost:5000/api/payments/${itemId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        // If the update is successful, fetch the updated order items
        fetchData();
      } else {
        console.error("Error updating approval status");
      }
    } catch (error) {
      console.error("Error updating approval status:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="sell__car">
      <div className="sell__car-wrapper">
        {/* <h2 className="sell__car-title">All Orderd Products</h2> */}
        <h2>All Fee Records</h2>
        <table class="table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Email</th>
              <th>Amount</th>
              <th>Cart Number</th>
              <th>Expiry Date</th>
              <th>Cvv</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {apiData
              .filter((item) => item.Feepayment === "feepayment")
              .map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>{item.fullName}</td>
                  <td>{item.email}</td>
                  <td>{item.amount}</td>
                  <td>{item.cardNumber}</td>
                  <td>{item.expiryDate}</td>
                  <td>{item.cvv}</td>
                  <td>
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

export default FeeRecords;
