// const { v4: uuidv4 } = require('uuid')
// const getAge = require('get-age')
// const { getId } = require('../plugins/get-id.plugin')
// const { getAge } = require('../plugins/get-age.plugin')
// const { getId, getAge } = require('../plugins/index')

const buildMakePerson = ({ getId, getAge }) => {
  return ({ name, birthdate }) => {
    return {
      id: getId(),
      name,
      birthdate,
      age: getAge(birthdate)
    }
  }
}

// const obj = {
//   name: 'Valentin Zalazar',
//   birthdate: '1994-09-11'
// }

// const valen = buildPerson(obj)
// console.log(valen)

module.exports = {
  buildMakePerson
}
