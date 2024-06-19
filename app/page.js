"use client";

import { useEffect, useState } from "react";

export default function Users() {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = "/api/get-data"; // Ensure the URL matches the API route

      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          const jsonResponse = response.data;
          console.log("Response data: ", jsonResponse);
          setResponseData(jsonResponse);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
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
      <p>{responseData?.salam}</p>
    </div>
  );
}
