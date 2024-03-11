const users = [
  {
    id: 1,
    name: 'John Doe'
  },
  {
    id: 2,
    name: 'Jane Doe'
  }
]

const getUserById = (id, callback) => {
  const user = users.find((user) => {
    return user.id === id
  })(
    // if (!user) {
    //   return callback(`User not found with id ${id}`)
    // }

    // return callback(null, user)

    user
  )
    ? callback(null, user)
    : callback(`User not found with id ${id}`) // manera alternativa de reducir el codigo!
}

module.exports = {
  getUserById
}
