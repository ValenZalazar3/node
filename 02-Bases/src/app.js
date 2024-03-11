// const { emailTemplate } = require('./js-foundation/01-template.js')
// require('./js-foundation/02-destructuring')
// const { getUserById } = require('./js-foundation/03-callbacks.js')
// const { getUserById } = require('./js-foundation/04-arrow')
// const { getId, getAge } = require('./plugins/index')
// const { buildMakePerson } = require('./js-foundation/05-factory')
// console.log(emailTemplate)
// const id = 1
// getUserById(id, (error, user) => {
//   if (error) {
//     throw new Error(error)
//   }
//   console.log(user)
// })

// const makePerson = buildMakePerson({
//   getAge,
//   getId
// })

// const obj = {
//   name: 'Valentin Zalazar',
//   birthdate: '1994-09-11'
// }

// const valen = makePerson(obj)
// console.log(valen)

// Lo de arriba es fuction factory y uso

const getPokemonById = require('./js-foundation/06-promises')

console.log(getPokemonById(1))
