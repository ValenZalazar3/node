import { SeverityLevel } from "@prisma/client";
import { LogEntity, LogSeverityLevel } from "./log.entities"





describe('LogEntity', () => {

    const dataObj = {
        message: 'Hola mundo',
        level: LogSeverityLevel.high,
        origin: 'log.entities.test.ts'
    }
    test('should create a LogEntity instance', () => {


        const log = new LogEntity(dataObj);

        expect(log).toBeInstanceOf(LogEntity)
        expect(log.message).toBe(dataObj.message)
        expect(log.level).toBe(dataObj.level)
        expect(log.origin).toBe(dataObj.origin)
        expect(log.createdAt).toBeInstanceOf(Date)

    });

    test('should create a LogEntity instance from json', () => {

        const json = `{"message":"Service http://google.com working","level":"low","createdAt":"2024-04-08T16:15:35.198Z","origin":"check-service.ts"}`

        const log = LogEntity.fromJson(json)

        expect(log).toBeInstanceOf(LogEntity)
        expect(log.message).toBe("Service http://google.com working")
        expect(log.level).toBe(LogSeverityLevel.low)
        expect(log.origin).toBe("check-service.ts")
        expect(log.createdAt).toBeInstanceOf(Date)

    });


    test('should creat a LogEntity intance from object', () => {

        const log = LogEntity.fromObject(dataObj);

        expect(log).toBeInstanceOf(LogEntity)
        expect(log.message).toBe(dataObj.message)
        expect(log.level).toBe(dataObj.level)
        expect(log.origin).toBe(dataObj.origin)
        expect(log.createdAt).toBeInstanceOf(Date)

    })


})



