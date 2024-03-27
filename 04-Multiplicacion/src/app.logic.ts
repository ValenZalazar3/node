import fs from 'fs'
import { yarg } from './config/plugins/args.plugin'

// Fernando desestructura el yarg con "const {base, limit, show} = yarg" y hace lo mismo que hice.

let outputMessage = ''
const base = yarg.b
const headerMessage = `
==================================
        Tabla del ${base}
==================================\n
`
for (let i = 1; i <= yarg.l; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`
}
outputMessage = headerMessage + outputMessage
console.log(yarg.s && outputMessage)

const outputPath = 'outputs'

fs.mkdirSync(outputPath, { recursive: true })

fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage)
