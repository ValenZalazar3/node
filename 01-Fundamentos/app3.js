const fs = require('fs')

const content = fs.readFileSync('README.md', 'utf8')

const wordCount = content.split(' ').length

// const reactWordCount = content.split('React').length
// const reactWordCount = wordCount.filter((word) => word.toLowerCase().includes('react')).length SOLUCIÓN que dio Fernando en el video

const reactWordCount = content.match(/react/gi ?? []).length // SOLUCIÓN real del video (también sirve con expresiones regulares)

console.log('Palabras:', wordCount)
console.log('Palabras React:', reactWordCount)
