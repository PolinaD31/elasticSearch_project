import express from 'express'
import { checkClient } from './elastic/elastic.js'
import { connectToDatabase } from './database/db.js'

const app = express()

app.use(express.json())

app.get('/api', (req, res) => {
  res.send('health check')
})

const PORT = 3001
app.listen(PORT, async () => {
  await checkClient()
  await connectToDatabase()
  console.log(`App running on port ${PORT}`)
})
