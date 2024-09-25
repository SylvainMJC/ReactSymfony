import React, { useState } from "react";

export default function Login({ error, user, lastUsername, csrfToken }) {
  const [email, setEmail] = useState(lastUsername || "");
  const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a FormData object
    const data = new FormData();
    data.append("username", formData.username);
    data.append("password", formData.password);

    // Send data to the PHP script using fetch
    fetch("login.php", {
      method: "POST",
      body: data,
    })
      .then((response) => response.text()) // or response.json() for JSON responses
      .then((data) => {
        console.log("Success:", data); // Handle the response data
      })
      .catch((error) => {
        console.error("Error:", error); // Handle errors
      });
  };

  return (
    <div>
      {error && <div className="alert alert-danger">{error}</div>}

      {user && (
        <div className="mb-3">
          You are logged in as {user}, <a href="/logout">Logout</a>
        </div>
      )}

      <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="inputEmail">Email</label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            autoFocus
          />
        </div>

        <div className="mb-3">
          <label htmlFor="inputPassword">Password</label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>

        <input type="hidden" name="_csrf_token" value={csrfToken} />

        <button className="btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}
