const conn = require('./QueryConnector')

module.exports = {
  typeDefs: `
    type Query
  `,
  resolvers: {
    Query: {
      users: () => conn.allUsers(),
      rockets: (_root, _args, { dataSources }) => dataSources.SpaceX.rockets()
    }
  }
}