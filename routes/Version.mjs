import Express from 'express'
import { VersionController } from '../controllers/index.mjs'
import { RequestHandlers } from '../middlewares/index.mjs'

const {
  routeMatched
} = RequestHandlers

const {
  get
} = VersionController

const VersionRouter = new Express.Router()

VersionRouter.get('/', routeMatched, get)

export default VersionRouter
