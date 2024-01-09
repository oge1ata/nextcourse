"use client";

import { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAllUsers() {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users", {
        method: "GET",
        // cache: 'no-store' //doesn't store any kind of cache
      });

      const result = await response.json();

      if (result && result.users) {
        setUsers(result.users);
        setLoading(false);
      }
    }

    fetchAllUsers();
  }, []);

  console.log(users);

  if (loading) return <h1> Loading Data! Please Wait</h1>;

  return (
    <div>
      <h1>Users List:</h1>
      <ul>
        {users && users.length ? (
          users.map((user) => (
            <li key={user.id}>
              {" "}
              <h1>
                {" "}
                {user.firstName} {user.lastName}
              </h1>
            </li>
          ))
        ) : (
          <h1>No users found</h1>
        )}
      </ul>
    </div>
  );
}
