"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = "/api/get-data"; // Ensure the URL matches the API route

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          const jsonResponse = response.data;
          console.log("Response data: ", jsonResponse);
          setResponseData(jsonResponse);
          setError(null); // Clear previous errors if the request is successful
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(
          "Error fetching data. Please make sure the server is running."
        );
      }
    };

    fetchData();
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>ESP Data</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <p>{responseData?.salam}</p>
      )}
    </div>
  );
}
