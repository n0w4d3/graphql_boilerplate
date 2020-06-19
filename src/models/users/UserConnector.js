const { v4: uuidv4 } = require('uuid')

const allUsers = ({ DB }) => DB.User

const addUser = (user, { DB  }) => {
  const id = uuidv4()
  DB.User.push({ id, ...user })
  return DB.User.filter( user => user.id === id )[0]
}

module.exports = {
  allUsers,
  addUser
}