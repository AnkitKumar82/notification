import { MailModel } from '../models/index.mjs'

const MailController = {
  send
}

async function send (request, response, next) {
  try {
    const { body } = request
    await MailModel.send(body)
    const responseBody = { message: 'Mail sent successfully' }
    response.body = responseBody
    process.nextTick(next)
  } catch (error) {
    response.status(error.status || 500)
    return response.send(error).end()
  }
}

export default MailController
