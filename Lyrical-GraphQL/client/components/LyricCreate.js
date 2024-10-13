import React, { useState } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import fetchSong from "../queries/fetchSong";

const LyricCreate = ({ mutate, songId }) => {
  const [lyric, setLyric] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!lyric) return;

    mutate({
      variables: {
        content: lyric,
        songId,
      },
      //   refetchQueries: [{ query: fetchSong, variables: { id: songId } }],
    }).then(() => {
      setLyric("");
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Add a Lyric</label>
      <input value={lyric} onChange={(e) => setLyric(e.target.value)} />
    </form>
  );
};

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);
