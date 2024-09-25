import React, { useState } from "react";

export default function Login({ error, user, lastUsername, csrfToken }) {
  const [email, setEmail] = useState(lastUsername || "");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();

    
    // Create a FormData object
    // const data = new FormData();
    // data.append('email', email);
    // data.append('password', password);

    // const data = {
    //   email: email,
    //   password: password
    // };
    console.log(JSON.stringify({ email, password }))
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // Make sure these match the `username_path` and `password_path` in security.yaml
        credentials: 'include', // This allows the backend to set cookies in the browser
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Server response:', response.status, errorData);
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      console.log('Login successful', data);
    } catch (error) {
      console.error('Error:', error);
    }

  }


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
