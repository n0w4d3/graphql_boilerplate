const { ApolloServer } = require('apollo-server') 
const DB = require('./datasource/json')
const { schema } = require('./models')
const { SpaceX } = require('./datasource/rest')



const server = new ApolloServer({ 
  schema,
  context: request => {
    return {
      ...request,
      DB
    }
  },
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