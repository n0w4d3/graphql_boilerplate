const { User } = require('../../datasource/json')
const { v4: uuidv4 } = require('uuid')

const addUser = ( user ) => {
  const id = uuidv4()
  User.push({ id, ...user })
  return User.filter( user => user.id === id )[0]
}

module.exports = {
  addUser
}