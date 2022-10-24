import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";
import LoaderButton from "../components/LoaderButton";
import { useAppContext, useAuth } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";
import { onError } from "../libs/errorLib";
import "./Login.css";

export default function Login() {
  const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);
  const [fields, handleFieldChange] = useFormFields({
    username: "",
    password: "",
  });
  const { setAuthTokens } = useAuth();

  function validateForm() {
    return fields.username.length > 0 && fields.password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    try {
      axios
        .post(process.env.REACT_APP_URL + "/login", fields)
        .then((result) => {
          if (result.status === 200) {
            setAuthTokens(result.data.accessToken);
            userHasAuthenticated(true);
          } else {
            onError("Error");
          }
        })
        .catch((e) => {
          onError(e);
          setIsLoading(false);
        });

      //   await Auth.signIn(fields.email, fields.password);
    } catch (e) {
      onError(e);
      setIsLoading(false);
    }
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={fields.username}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
          />
        </Form.Group>
        <LoaderButton
          block
          size="lg"
          type="submit"
          isLoading={isLoading}
          disabled={!validateForm()}
        >
          Login
        </LoaderButton>
      </Form>
    </div>
  );
}
