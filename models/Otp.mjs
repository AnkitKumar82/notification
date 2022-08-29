import MailModel from './Mail.mjs'
import persistentDataStore from './DataStore.mjs'
import moment from 'moment-timezone'
import OTP_CONFIG from '../config/OTP_CONFIG.mjs'

const OtpModel = {
  generate,
  validate
}

async function generate (attrs = {}) {
  let { refId = '', text = '', subject = '', email = '', otpLength = 6 } = attrs

  const otpAttrs = _buildOtpAttrs(otpLength)

  const sendMailRequest = {
    text: `${text} ${otpAttrs.otp}`,
    subject,
    email
  }
  await MailModel.send(sendMailRequest)

  refId = persistentDataStore.set(refId, otpAttrs)

  const response = {
    refId,
    retryCount: 1
  }
  return response
}

function _buildOtpAttrs (otpLength) {
  const min = Math.pow(10, (otpLength - 1))
  const max = Math.pow(10, (otpLength))
  const otp = Math.floor(Math.random() * (max - min) + min)
  const expiryDate = moment().add(OTP_CONFIG.VALIDITY, 'minutes')
  return {
    otp,
    expiryDate
  }
}

async function validate (attrs = {}) {
  const { refId = '', otp = '' } = attrs

  const values = persistentDataStore.get(refId)

  if (!values) return false

  for (const val of values) {
    if (`${otp}` === `${val.otp}` && moment().isBefore(val.expiryDate)) {
      return true
    }
  }
  return false
}

export default OtpModel
