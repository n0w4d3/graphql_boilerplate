const { makeExecutableSchema } = require('graphql-tools')

const user = require('./users/User')
const rocket = require('./rockets/Rocket')

const typeDefs = [
  `type Query`,
  `type Mutation`,
  user.typeDefs,
  rocket.typeDefs
]

const resolvers = [
  user.resolvers,
  rocket.resolvers,
]

const schema = makeExecutableSchema({
  typeDefs, resolvers
})

module.exports = { schema }

