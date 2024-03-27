import { CreateTable } from '../domain/use-cases/create-table.use-case'
import { SaveFile } from '../domain/use-cases/save-file.use-case'

interface RunOptions {
  base: number
  limit: number
  show: boolean
}

export class ServerApp {
  static run({ base, limit, show }: RunOptions) {
    console.log('Server runing...')
    const table = new CreateTable().execute({ base, limit })
    const wasCreated = new SaveFile().execute({ fileContent: table })
    if (show) console.log(table)
    wasCreated
      ? console.log('File created!')
      : console.error('File not create!')
  }
}
