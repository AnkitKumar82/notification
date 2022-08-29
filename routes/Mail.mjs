import Express from 'express'
import { MailController } from '../controllers/index.mjs'
import { RequestHandlers } from '../middlewares/index.mjs'

const {
  routeMatched
} = RequestHandlers

const {
  send
} = MailController

const MailRouter = new Express.Router()

MailRouter.post('/send', routeMatched, send)

export default MailRouter
