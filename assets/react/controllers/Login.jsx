import React, { useState } from "react";

export default function Login({ error, user, lastUsername, csrfToken }) {
  const [email, setEmail] = useState(lastUsername || "");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, csrfToken });
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

      <form onSubmit={handleSubmit}>
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
