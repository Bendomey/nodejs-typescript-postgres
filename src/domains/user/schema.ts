import { gql } from "apollo-server-express";

export default gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    age: Int!
  }

  input getUserFilter {
    id: Int!
  }

  input createUserInput {
    firstName: String!
    lastName: String!
    age: Int!
  }

  input updateUserInput {
    id: Int!
    firstName: String
    lastName: String
    age: Int
  }

  input deleteUserInput {
    id: Int!
  }

  extend type Query {
    users: [User]!
    user(filter: getUserFilter!): User
  }

  extend type Mutation {
    createUser(input: createUserInput!): User!
    updateUser(input: updateUserInput): User!
    deleteUser(input: deleteUserInput!): Boolean!
  }
`;
