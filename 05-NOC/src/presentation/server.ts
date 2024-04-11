import { LogSeverityLevel } from "../domain/entities/log.entities";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { SendEmailLogs } from "../domain/use-cases/logs/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { envs } from "../config/plugins/envs.plugin";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";



const fsLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
);// con esto se puede crear otros data source, sin tener que cambier mayores cosas.

const mongoLogRepository = new LogRepositoryImpl(
    new MongoLogDatasource()
);

const postgresLogRepository = new LogRepositoryImpl(
    new PostgresLogDatasource()
);


const emailService = new EmailService()


export class Server {

    public static async start() {
        console.log('Server started...')
        // Mandar email

        // new SendEmailLogs(emailService, fileSystemLogRepository).execute('valenzalazar3@gmail.com') // aca se hace en un caso de uso

        // emailService.sendEmailWithFileSystemLogs('valenzalazar3@gmail.com') // este es con archivos adjuntos, el que le sigue no.
        // emailService.sendEmail({
        //     to: 'valenzalazar3@gmail.com',
        //     subject: 'Logs del sistema',
        //     htmlBody: `
        //     <h3> Logs de sistema - NOC</h3>
        //     <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. </p>
        //     <p>Ver logs adjuntos</p>
        //     `
        // })

        // const logs = await logRepository.getLogs(LogSeverityLevel.low)
        // console.log(logs)

        CronService.createJob(
            '*/5 * * * * *',
            () => {
                const url = 'http://google.com'
                new CheckService(
                    mongoLogRepository,
                    () => console.log(`${url} is ok`),
                    (error) => console.log(error)
                ).execute(url)
                // new CheckService().execute('http://localhost:3000')
            }
        )
    }
}
