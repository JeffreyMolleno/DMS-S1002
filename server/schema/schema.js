const { gql } = require("apollo-server-express");

const typeDefs = gql`
  union Result = Subject | Value | Property

  type Property {
    id: ID!
    subject: Subject #define the node
    definition: String! #additional info for this node
    active: Boolean #inherent node's boolean property
    value: Value #value object definition(id)
    master: Subject #parent node
    collection: Subject #determines to what organ this property belong
  }

  type Value {
    id: ID
    definition: String!
    hold: String
    type: Subject!
  }

  type Subject {
    id: ID
    title: String
  }

  type Query {
    getAllGenericProperty: [Property]
    getProperty: Property
    getNames: [Property]
    getCollection(album: String, id: ID): [Property]
  }

  type Mutation {
    addValueProperty(
      subject: String!
      definition: String!
      active: Boolean
      value: String
      value_definition: String
      value_type: String
      master: String
      collection: String!
    ): GeneralMutationResponse
    addSubject(title: String!): GeneralMutationResponse
    # addType(title: String!): Subject
    addValue(
      definition: String!
      hold: String!
      subject_id: ID!
    ): GeneralMutationResponse #subject_id referes to the objtype
    addNewProperty(input: CreateNewProperty): GeneralMutationResponse
  }

  input CreateNewProperty {
    subject: String!
    definition: String
    active: Boolean
    master: String
    collection: String
  }

  type GeneralMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
    result: Result
  }

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }
`;

module.exports = typeDefs;
