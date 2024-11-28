import React, { useState } from "react";

const AuthForm = ({ onSubmit, errors }) => {
  const [email, setEmail] = useState("test1@test.com");
  const [password, setPassword] = useState("123456");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <div className="row">
      <form className="col s6" onSubmit={handleOnSubmit}>
        <div className="input-field">
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="errors">
          {errors.map((error) => (
            <div key={error}>{error}</div>
          ))}
        </div>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
