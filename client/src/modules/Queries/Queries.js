import { gql } from "apollo-boost";

const getAllGenericProperty = gql`
  {
    getAllGenericProperty {
      ... on Property {
        definition
        subject {
          title
        }
        active
        master {
          title
        }
        collection {
          title
        }
        value {
          hold
          type {
            title
          }
        }
      }
    }
  }
`;

export { getAllGenericProperty };
