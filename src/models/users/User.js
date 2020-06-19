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
      addUser: (parent, { input }, context) => conn.addUser(input, context) 
    },
    Query: {
      users: (parent, args, context) => conn.allUsers(context),
    }
  }
}