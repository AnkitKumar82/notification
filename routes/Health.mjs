import Express from 'express'
import { HealthController } from '../controllers/index.mjs'
import { RequestHandlers } from '../middlewares/index.mjs'

const {
  routeMatched
} = RequestHandlers

const {
  get
} = HealthController

const HealthRouter = new Express.Router()

HealthRouter.get('/', routeMatched, get)

export default HealthRouter
