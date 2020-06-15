module.exports = {
  typeDefs: `
    type Rocket {
      id: ID!
      country: String!
      description: String!
      first_flight: String!
      name: String!
    }

    extend type Query {
      rockets: [Rocket!]
    }
  `,
  resolvers: {
    Query: {
      rockets: (_root, _args, { dataSources }) => dataSources.SpaceX.rockets()
    }
  }
}