import dotenv from 'dotenv'
import path from 'path'
dotenv.config({ path: path.resolve(__dirname, '../../.env') })

import app from './app'

const start = async () => {
  const PORT = process.env.AUTH_PORT

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
  })
}

start()