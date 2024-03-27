import { getId } from '../../src/plugins/get-id.plugin'

describe('plugin/get-id.plugin.ts', () => {
  test('getId() should return a UUID', () => {
    const uuid = getId()
    expect(typeof uuid).toBe('string')
    expect(uuid.length).toBe(36)
  })
})
