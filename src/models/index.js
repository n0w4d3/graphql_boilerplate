const { gql } = require('apollo-server')
const mutation = require('./mutations/Mutation')
const query = require('./queries/Query')
const user = require('./users/User')
const rocket = require('./rockets/Rocket')

module.exports = {
  typeDefs: gql`
    ${query.typeDefs}
    ${mutation.typeDefs}
    ${user.typeDefs}
    ${rocket.typeDefs}
  `,
  resolvers: {
    ...query.resolvers,
    ...mutation.resolvers,
    ...user.resolvers,
    ...rocket.resolvers,
  }
}
