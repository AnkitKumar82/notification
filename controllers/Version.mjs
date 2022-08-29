import { VersionModel } from '../models/index.mjs'

const VersionController = {
  get
}

async function get (request, response, next) {
  try {
    const data = await VersionModel.get()
    const responseBody = { data, message: 'Version check successful' }
    response.body = responseBody
    process.nextTick(next)
  } catch (error) {
    response.status(error.status || 500)
    return response.send(error).end()
  }
}

export default VersionController
