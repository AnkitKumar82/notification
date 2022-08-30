import nodemailer from 'nodemailer'
import { MAIL_CONFIG } from '../config/index.mjs'
const MailModel = {
  send
}

const transporter = nodemailer.createTransport({
  service: MAIL_CONFIG.HOST,
  auth: {
    user: MAIL_CONFIG.APP_NAME,
    pass: MAIL_CONFIG.APP_PASSWORD
  }
})

async function send (attrs = {}) {
  const { text = '', subject = '', email = '', from = '' } = attrs

  await transporter.sendMail({
    from: `${from} ${MAIL_CONFIG.APP_NAME}`,
    to: email,
    subject,
    text
  })
}

export default MailModel
