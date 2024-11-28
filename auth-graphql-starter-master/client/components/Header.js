import React from "react";
import { graphql } from "react-apollo";
import query from "../queries/CurrentUser";
import mutation from "../mutations/Logout";
import { Link } from "react-router";

const Header = ({ data, mutate }) => {
  const { loading, user } = data;

  const onLogout = () => {
    mutate({
      refetchQueries: [{ query }],
    });
  };

  const renderButtons = () => {
    if (loading) {
      return <div></div>;
    }

    if (user) {
      return (
        <li>
          <a onClick={onLogout}>Logout</a>
        </li>
      );
    }

    return (
      <div>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </div>
    );
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo left">
          Home
        </Link>
        <ul className="right">{renderButtons()}</ul>
      </div>
    </nav>
  );
};

export default graphql(mutation)(graphql(query)(Header));
