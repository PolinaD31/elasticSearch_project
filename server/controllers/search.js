import { Router } from 'express'
import client from '../elastic/elastic.js'
import queryConstructionHelper from '../helpers/queryConstructionHelper.js'

const searchController = Router()

searchController.get('/', async (req, res) => {
  try {
    const searchParams = req.query

    const query = queryConstructionHelper(searchParams)
    const body = await client.search(query)

    const items = body.hits.hits.map((hit) => hit._source)

    res.json(items)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
})

export default searchController
