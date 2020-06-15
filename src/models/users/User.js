const conn = require('./UserConnector')

module.exports = {
  typeDefs: `
    type User {
      id: ID!
      name: String!
      username: String!
      email: String!
    }

    extend type Query {
      users: [User!]
    }

    input UserMutationInput {
      name: String!
      email: String!
      username: String!
    }

    extend type Mutation{
      addUser(input: UserMutationInput!):User!
    }
  `,
  resolvers: {
    Mutation:{
      addUser: (__,{ input }) => conn.addUser(input) 
    },
    Query: {
      users: () => conn.allUsers(),
    }
  }
}