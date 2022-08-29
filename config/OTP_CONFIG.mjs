const {
  OTP_VALIDITY = ''
} = process.env

const VALIDITY = parseInt(OTP_VALIDITY, 10)

const OTP_CONFIG = {
  VALIDITY
}

export default OTP_CONFIG
