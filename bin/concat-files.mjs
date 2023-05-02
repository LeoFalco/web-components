import { readFile, writeFile, unlink } from 'fs/promises'

async function main () {
  const inputFileNames = ['dist/pokemon-card/main.js', "dist/pokemon-card/runtime.js"]
  const outputFileName = 'dist/pokemon-card/pokemon-card.js'

  const joinedFiles = await Promise
    .all(inputFileNames.map(filename => readFile(filename, { encoding: 'utf-8' })))
    .then(contents => contents.join(''))

  await writeFile(outputFileName, joinedFiles, { encoding: 'utf-8' })
  await Promise.all(inputFileNames.map(filename => unlink(filename)))
}


main()