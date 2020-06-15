const { mergeResolvers, mergeTypeDefs } = require('@graphql-tools/merge')

const user = require('./users/User')
const rocket = require('./rockets/Rocket')

const typeDefs = mergeTypeDefs([
  `type Query`,
  `type Mutation`,
  user.typeDefs,
  rocket.typeDefs
])

const resolvers = mergeResolvers([
  user.resolvers,
  rocket.resolvers,
])


module.exports = { typeDefs, resolvers }

