import { envs } from "./envs.plugin"




describe('envs.plugins.ts', () => {
    test('should return env options', () => {
        expect(envs).toEqual({
            PORT: 3000,
            MAILER_SERVICE: 'gmail',
            MAILER_EMAIL: 'valenzalazar3@gmail.com',
            MAILER_SECRET_KEY: 'bfmaixpfthukflza',
            PROD: true,
            MONGO_URL: 'mongodb://valentin:123456789@localhost:27017/',
            MONGO_DB_NAME: 'NOC-TEST',
            MONGO_USER: 'valentin',
            MONGO_PASS: '123456789'
        })
    })

    test('should return error if not found env', async () => {
        jest.resetModules()
        process.env.PORT = 'ABC'
        try {
            await import('./envs.plugin')
            expect(true).toBe(false)
        } catch (error) {
            expect(`${error}`).toContain('"PORT" should be a valid integer')
        }
    })
})



