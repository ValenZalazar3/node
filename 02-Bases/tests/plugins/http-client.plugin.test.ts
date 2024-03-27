import { httpClientPlugin } from '../../src/plugins/http-client.plugin'

describe('plugins/http-client.plugin.ts', () => {
  test('httpClientPlugin.get() shoul retunr a string', async () => {
    const data = await httpClientPlugin.get(
      'https://jsonplaceholder.typicode.com/todos/1'
    )

    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: expect.any(Boolean)
    })
  })
  test('httpClientPlugin should have POST, PUT and Delete methods', () => {
    const post = httpClientPlugin.post

    expect(typeof post).toBe('function')
    const put = httpClientPlugin.put

    expect(typeof put).toBe('function')

    const delet = httpClientPlugin.delete

    expect(typeof delet).toBe('function')
  })
})
