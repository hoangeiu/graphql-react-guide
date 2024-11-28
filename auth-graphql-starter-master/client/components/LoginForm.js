import React, { useState, useRef, useEffect } from "react";
import { graphql } from "react-apollo";
import mutation from "../mutations/Login";
import query from "../queries/CurrentUser";
import AuthForm from "./AuthForm";
import { hashHistory } from "react-router";

const LoginForm = ({ data, mutate }) => {
  const [errors, setErrors] = useState([]);
  const ref = useRef(data.user);

  const { user } = data;

  useEffect(() => {
    if (!ref.current && user) {
      // redirect to dashboard
      hashHistory.push("/dashboard");
    }
  }, [user]);

  const onSubmit = ({ email, password }) => {
    mutate({
      variables: { email, password },
      refetchQueries: [{ query }],
    }).catch((err) => {
      const errs = err.graphQLErrors.map((error) => error.message);
      console.log(errs);
      setErrors(errs);
    });
  };

  return (
    <div>
      <h3>Login</h3>
      <AuthForm onSubmit={onSubmit} errors={errors} />
    </div>
  );
};

export default graphql(query)(graphql(mutation)(LoginForm));
