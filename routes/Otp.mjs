import Express from 'express'
import { OtpController } from '../controllers/index.mjs'
import { RequestHandlers } from '../middlewares/index.mjs'

const {
  routeMatched
} = RequestHandlers

const {
  generate,
  validate
} = OtpController

const OtpRouter = new Express.Router()

OtpRouter.post('/generate', routeMatched, generate)
OtpRouter.post('/validate', routeMatched, validate)

export default OtpRouter
