import { characters } from '../../src/js-foundation/02-destructuring'

describe('02-destructuring', () => {
  test('characters should containt Flash, Superman', () => {
    expect(characters).toContain('Flash')
    expect(characters).toContain('Superman')
  })

  test('first character should be Flash, second should be Superman', () => {
    const [flash, superman] = characters

    expect(flash).toBe('Flash')
    expect(superman).toBe('Superman')
  }) // este especificamente dice que priumero tiene que ser flash y segundo superman
})
