import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import fetchSongs from "../queries/fetchSongs";
import gql from "graphql-tag";

const SongList = ({ mutate, data }) => {
  const { loading, songs } = data;

  if (loading) return <div>Loading...</div>;

  const onSongDelete = (id) => {
    mutate({
      variables: {
        id,
      },
    }).then(() => data.refetch());
  };

  const renderSongs = () => {
    return songs.map(({ id, title }) => (
      <li key={id} className="collection-item">
        <Link to={`/songs/${id}`}>{title}</Link>
        <i className="material-icons" onClick={() => onSongDelete(id)}>
          delete
        </i>
      </li>
    ));
  };

  return (
    <div>
      <ul className="collection">{renderSongs()}</ul>
      <Link to="/songs/create" className="btn-floating btn-large red right">
        <i className="material-icons">add</i>
      </Link>
    </div>
  );
};

const mutation = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
      title
    }
  }
`;

export default graphql(mutation)(graphql(fetchSongs)(SongList));
