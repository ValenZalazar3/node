import fs from "fs"
import path from "path"
import { FileSystemDatasource } from "./file-system.datasource"
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entities"





describe('FileSystemDatasource', () => {

    const logPath = path.join(__dirname, '../../../logs')
    console.log({ logPath })

    beforeEach(() => {
        fs.rmSync(logPath, { recursive: true, force: true })
    })


    test('Should create log files if they do not exist', () => {

        new FileSystemDatasource();

        const files = fs.readdirSync(logPath)
        expect(files).toEqual(['logs-all.log', 'logs-high.log', 'logs-medium.log'])
    })

    test('should save a log in logs-all.log', () => {
        const logDatasource = new FileSystemDatasource()

        const log = new LogEntity({
            message: 'test',
            level: LogSeverityLevel.low,
            origin: 'file-system.datasource.test.ts'
        })

        logDatasource.saveLog(log)

    })



})



