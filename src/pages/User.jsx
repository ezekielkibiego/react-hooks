import React, { useState, useEffect } from "react";

const User = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return <div>{user ? <p>{user.name}</p> : <p>Loading...</p>}</div>;
};

export default User;