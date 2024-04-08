import { log } from "console"
import { MongoDatabase, LogModel } from "./data/mongo"
import { envs } from "./plugins/envs.plugin"
import { Server } from "./presentation/server"
import { PrismaClient, SeverityLevel } from "@prisma/client"


(async () => {
    main()
})()



async function main() {

    await MongoDatabase.connect({ mongoUrl: envs.MONGO_URL, dbName: envs.MONGO_DB_NAME })

    const prisma = new PrismaClient()
    // const newLog = await prisma.logModel.create({
    //     data: {
    //         level: 'HIGH',
    //         message: 'Text message',
    //         origin: 'App.ts'
    //     }
    // })
    // console.log(newLog)
    // const logs = await prisma.logModel.findMany({
    //     where: {
    //         level: 'MEDIUM'
    //     }
    // })
    // console.log(logs)

    // const newLog = await LogModel.create({
    //     message: 'Test message desde Mongo',
    //     origin: 'App.ts',
    //     level: 'low'
    // })
    // await newLog.save()
    // console.log(newLog)
    // const logs = await LogModel.find()
    // console.log(logs)

    Server.start()
    // console.log(process.env.MAILER_EMAIL)
}