const {
  MAIL_APP_NAME = '',
  MAIL_APP_PASSWORD = '',
  MAIL_HOST = ''
} = process.env

const MAIL_CONFIG = {
  APP_NAME: MAIL_APP_NAME,
  APP_PASSWORD: MAIL_APP_PASSWORD,
  HOST: MAIL_HOST
}

export default MAIL_CONFIG
