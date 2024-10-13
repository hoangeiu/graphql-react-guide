import React from "react";
import { graphql } from "react-apollo";
import fetchSong from "../queries/fetchSong";
import { Link } from "react-router";
import LyricCreate from "./LyricCreate";
import LyricList from "./LyricList";

const SongDetail = ({ data }) => {
  console.log(data);
  const { loading, song } = data;

  if (loading) return <div>Loading...</div>;

  const { id, title, lyrics } = song;

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>{title}</h3>
      <LyricCreate songId={id} />
      <LyricList lyrics={lyrics} />
    </div>
  );
};

export default graphql(fetchSong, {
  options: (props) => {
    return { variables: { id: props.params.id } };
  },
})(SongDetail);
