import { HealthModel } from '../models/index.mjs'

const HealthController = {
  get
}

async function get (request, response, next) {
  try {
    const data = await HealthModel.get()
    const responseBody = { data, message: 'Health check successful' }
    response.body = responseBody
    process.nextTick(next)
  } catch (error) {
    response.status(error.status || 500)
    return response.send(error).end()
  }
}

export default HealthController
