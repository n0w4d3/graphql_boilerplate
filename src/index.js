const { ApolloServer } = require('apollo-server') 
const { typeDefs, resolvers } = require('./models')
const { SpaceX } = require('./datasource/rest')

const server = new ApolloServer({ 
  typeDefs, 
  resolvers,
  dataSources: () => {
    return {
      SpaceX: new SpaceX()
    }
  }
  // ...
})

server.listen().then(({ url }) => {
  console.log(`Server on ${url}`)
})