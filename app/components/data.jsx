"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../page.module.css";

const Users = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const url = "http://localhost:3000/api/hello";
      try {
        const response = await axios.post(
          url,
          {
            // Pass any data needed for the POST request here
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );

        if (response.status === 200) {
          const jsonResponse = response.data;
          setResponseData(jsonResponse);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.div}>
      {responseData ? JSON.stringify(responseData) : "Loading..."}
    </div>
  );
};

export default Users;
