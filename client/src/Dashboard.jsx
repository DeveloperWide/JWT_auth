import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:5000/api/auth/protected", {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => setData(res.data.message))
    .catch(() => setData("Unauthorized"));
  }, []);

  return <h1>{data}</h1>;
}
