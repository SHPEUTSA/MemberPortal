"use client";
import React, { ChangeEvent, useState } from "react";
import "./page.css";

export default function HttpTest() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);

  const handleGetRquest = async () => {
    const result = await fetch("/api/get", {
      method: "GET",
    });

    const data = await result.json();

    if (data.status !== 200) console.error("Error in request");

    console.log(data.users);
    setUsers(data.users);
  };

  const handlePostRequest = async () => {
    const result = await fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({ name, email }),
    });

    const data = await result.json();

    console.log(data.status);
    console.log(data.data);
  };
  return (
    <div className="httpButtons">
      <button className="getTest" onClick={handleGetRquest}>
        Test GET HTTP Request
      </button>

      <div className="postButtons">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />

        <label>Email: </label>
        <input
          type="text"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <button className="postTest" onClick={handlePostRequest}>
          Test POST HTTP Request
        </button>
      </div>

      <div>
        <hr />
        {users
          ? users.map((user) => (
              <div key={user.name}>
                <p>Email: {user.email}</p>
                <p>Name: {user.name}</p>
                <p>Points: {user.points}</p>
                <hr />
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}
