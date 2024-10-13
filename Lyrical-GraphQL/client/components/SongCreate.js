import React, { useState } from "react";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";
import fetchSongs from "../queries/fetchSongs";
import gql from "graphql-tag";

const SongCreate = ({ mutate }) => {
  const [title, setTitle] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    mutate({
      variables: {
        title,
      },
      refetchQueries: [{ query: fetchSongs }],
    }).then(() => hashHistory.push("/"));
  };

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>Create a New Song</h3>
      <form onSubmit={onSubmit}>
        <label>Song Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </form>
    </div>
  );
};

const mutation = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

export default graphql(mutation)(SongCreate);
