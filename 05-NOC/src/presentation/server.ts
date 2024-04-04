import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/logs/email/send-email-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { envs } from "../plugins/envs.plugin";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";



const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
)// con esto se puede crear otros data source, sin tener que cambier mayores cosas.


const emailService = new EmailService()


export class Server {

    public static start() {
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


        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'http://google.com'
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log(`${url} is ok`),
        //             (error) => console.log(error)
        //         ).execute(url)
        //         // new CheckService().execute('http://localhost:3000')
        //     }
        // )
    }
}
