const conn = require('./MutationConnector')
module.exports = {
  typeDefs: `
    type Mutation
  `,
  resolvers: {
    Mutation:{
      addUser: (__,{ input }) => conn.addUser(input) 
    }
  }
}