import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!, $filter: String) {
    characters(page: $page, filter: { name: $filter }) {
      info {
        count
      }
      results {
        id
        name
        image
        status
        species
        episode {
          air_date
          name
        }
        location {
          name
          dimension
        }
        origin {
          name
          dimension
        }
      }
    }
  }
`;

//   results {
//     name
//     residents {
//       id
//       name
//       gender
//       image
//       status
//       species
//       origin {
//         name
//         dimension
//       }
//       location {
//         name
//         dimension
//       }
//       episode {
//         air_date
//       }
//     }
//   }
// }
