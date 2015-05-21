import bootstrap from './bootstrap'
import isomorph from './isomorph/server'
import path from 'path'
import routes from './routes'

const DEFAULT_PORT = 3000
const CLIENT_PATH = path.resolve(__dirname, 'client.js')
const CSS_PATH = path.resolve(__dirname, '../css/index.styl')
const STATIC_PATH = path.resolve(__dirname, '../static')

const app = isomorph({
  client: CLIENT_PATH,
  css: CSS_PATH,
  static: STATIC_PATH,
  routes: routes,
  bootstrap: bootstrap
})

const server = app.listen(process.env.PORT || DEFAULT_PORT, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('pudd.in listening on %s:%s', host, port)
})
