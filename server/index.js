import express from 'express'
import { checkClient } from './elastic/elastic.js'
import { connectToDatabase } from './database/db.js'
import searchController from './controllers/search.js'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

app.get('/api', (req, res) => {
  res.send('health check')
})

app.use('/api/search', searchController)

const PORT = 3001
app.listen(PORT, async () => {
  await checkClient()
  await connectToDatabase()
  console.log(`App running on port ${PORT}`)
})
