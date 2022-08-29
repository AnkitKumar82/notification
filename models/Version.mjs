import { readFile } from 'fs/promises'

let packageJSON = {}
const VersionModel = {
  get
}

async function get (attrs = {}) {
  const { name = '', version = '', description = '' } = packageJSON
  const data = { name, version, description }
  return data
}

(async () => {
  const packageJSONFile = await readFile(new URL('../package.json', import.meta.url))
  packageJSON = JSON.parse(packageJSONFile)
})()

export default VersionModel
