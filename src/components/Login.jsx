import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(email === "livia.freitas.94@gmail.com" && password === "12345678"){
      history.push("/home");
    } else {
      alert("Email ou senha inválidos!");
    }
  }

  return (

    <div className="Login">
    <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
        <label>Email</label>
        <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
        <label>Password</label>
        <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
        />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
        Login
        </Button>
    </form>
    </div>
  );
}