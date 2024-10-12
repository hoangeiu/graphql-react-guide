import React, { Fragment } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const SongList = ({ data }) => {
  const { loading, songs } = data;

  if (loading) return <div>Loading...</div>;

  const renderSongs = () => {
    return songs.map((song) => (
      <li key={song.id} className="collection-item">
        {song.title}
      </li>
    ));
  };

  return <ul className="collection">{renderSongs()}</ul>;
};

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
