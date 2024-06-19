// pages/index.tsx
"use client";
import { useEffect, useState } from "react";
import axios from "axios";

interface EspData {
  _id: string;
  key: string;
  value: string;
  createdAt: string;
  updatedAt: string;
}

export default function Users() {
  const [responseData, setResponseData] = useState<EspData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "/api/get-data";

      try {
        const response = await axios.get<EspData[]>(url);

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

    const intervalId = setInterval(fetchData, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>ESP Data</h1>
      {responseData.map((data) => (
        <div key={data._id}>
          <p>Key: {data.key}</p>
          <p>Value: {data.value}</p>
          <p>Created At: {new Date(data.createdAt).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
