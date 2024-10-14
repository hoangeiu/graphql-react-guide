import gql from "graphql-tag";

export default gql`
  query FetchSongLyric($id: ID!) {
    song(id: $id) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;
