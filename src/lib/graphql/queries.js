import { gql } from "@apollo/client";

export const GET_POSTS_QUERY = gql`
  query Publication {
    publication(host: "agungpraz.hashnode.dev") {
      posts(first: 5) {
        edges {
          node {
            title
            brief
            url
            ogMetaData {
              image
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
  }
`;
