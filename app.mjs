import Express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import Routes from './routes/index.mjs'
import { SERVER_CONFIG } from './config/index.mjs'

const { PORT, BODY_LIMIT, CORS_OPTIONS } = SERVER_CONFIG
const app = new Express()

app.use(cors(CORS_OPTIONS))
app.use(bodyParser.json({ limit: BODY_LIMIT }))
app.use(bodyParser.urlencoded({ limit: BODY_LIMIT, extended: true }))
app.use(helmet())

// Initialize routes
Routes.init(app)

// Start server
const startServer = async (app) => {
  try {
    await app.listen(PORT)
    console.log(`Listening on port ${PORT} `)
  } catch (error) {
    console.log(error)
  }
}
startServer(app)
