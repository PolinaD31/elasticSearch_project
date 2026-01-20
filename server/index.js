import express from 'express'
import { checkClient } from './elastic/elastic.js'
import { connectToDatabase } from './database/db.js'
import searchController from './controllers/search.js'

const app = express()

app.use(express.json())

app.get('/health', (req, res) => {
  res.send('health check')
})

app.use('/api/search', searchController)
app.use(express.static('dist'))

const PORT = process.env.PORT || 3001
app.listen(PORT, async () => {
  await checkClient()
  await connectToDatabase()
  console.log(`App running on port ${PORT}`)
})
