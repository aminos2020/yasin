"use client";

// const response = await fetch(`/api/login`)
import { useEffect, useState } from "react";

export default function Users() {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:3000/api/getdata";

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
      // Clear the interval when the component unmounts
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
