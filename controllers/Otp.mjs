import { OtpModel } from '../models/index.mjs'

const OtpController = {
  generate,
  validate
}

async function generate (request, response, next) {
  try {
    const { body } = request
    const data = await OtpModel.generate(body)
    const responseBody = { data, message: 'Otp sent successfully' }
    response.body = responseBody
    process.nextTick(next)
  } catch (error) {
    response.status(error.status || 500)
    return response.send(error).end()
  }
}

async function validate (request, response, next) {
  try {
    const { body } = request
    const data = await OtpModel.validate(body)
    const responseBody = { otpValid: data, message: 'Otp validated successfully' }
    response.body = responseBody
    process.nextTick(next)
  } catch (error) {
    response.status(error.status || 500)
    return response.send(error).end()
  }
}

export default OtpController
