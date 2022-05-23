import { app } from './app'

const prot = process.env.RAILWAY_ENVIRONMENT === 'production' ? 'https://' : 'http://'
const host = process.env.RAILWAY_STATIC_URL || 'localhost'
const port = process.env.PORT || 3333

app.listen(port, () => {
  console.log(`Server is runing on ${prot}${host}${prot === 'http://' ? `:${port}` : ''}`)
})
