import { gql } from "apollo-server-express";
import * as user from "./user";

const rootSchema = gql`
  scalar EmailAddress
  scalar DateTime
  scalar Date

  type Query {
    root: String
  }

  type Mutation {
    root: String
  }

  input Pagination {
    skip: Int
    limit: Int
  }

  enum DocumentsOrder {
    ascending
    descending
  }

  input DateRangeInput {
    startDate: Date
    endDate: Date
  }
`;

export const schemas = [rootSchema, user.schema];
export const resolvers = [user.resolver];
