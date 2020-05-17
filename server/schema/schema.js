const { gql } = require("apollo-server-express");

const typeDefs = gql`
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
    id: ID!
    definition: String!
    hold: String
    type: Subject!
  }

  type Subject {
    id: ID!
    title: String!
  }

  type Query {
    getAllGenericProperty: [Property]
    getProperty: Property
    getNames: [Property]
    getCollection(album: ID!): [Property]
  }

  type Mutation {
    addValueProperty(
      subject: String
      definition: String!
      active: Boolean
      hold: String
      objtype: String
      value: String
      master: String
      collection: String
      type: String
    ): Property
    addSubject(title: String!): Subject
    # addType(title: String!): Subject
    addValue(definition: String!, hold: String!, subject_id: ID!): Value #subject_id referes to the objtype
  }
`;

module.exports = typeDefs;
