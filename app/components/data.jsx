"use client";
import { useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";

const Users = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const url = "api/hello"; // Replace with the URL of your Next.js API route
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          // Pass any data needed for the POST request here
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        const jsonResponse = await response.json();
        setResponseData(jsonResponse);
      }
    }

    fetchData();
  }, []);

  return (
    <div>{responseData ? JSON.stringify(responseData) : "Loading..."}</div>
  );
};

export default Users;
