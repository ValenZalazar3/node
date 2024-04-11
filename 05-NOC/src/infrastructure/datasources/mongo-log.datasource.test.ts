
import { envs } from "../../config/plugins/envs.plugin"
import { MongoDatabase } from "../../data/mongo"
import mongoose from "mongoose"
import { MongoLogDatasource } from "./mongo-log.datasource"
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entities"







describe('Pruebas en MongoLogDatasource', () => {

    beforeAll(async () => {
        return await MongoDatabase.connect({
            dbName: envs.MONGO_DB_NAME,
            mongoUrl: envs.MONGO_URL,
        })
    })

    afterAll(() => {
        mongoose.connection.close()
    })


    test('should create log', async () => {

        const logDataSource = new MongoLogDatasource()

        const log = new LogEntity({
            level: LogSeverityLevel.medium,
            message: 'test message',
            origin: 'mongo-log.datasource.test.ts'
        })

        logDataSource.saveLog(log)


    })




})










