import { pool } from '../database/db.js'
import client from '../elastic/elastic.js'

const ingestDataIntoES = async () => {
  try {
    const products = await pool.query('SELECT * FROM products')

    const bulkIngestResponse = await client.helpers.bulk({
      index: 'slush_products',
      datasource: products.rows,
      timeout: '5m',
      onDocument() {
        return {
          index: {},
        }
      },
      refresh: 'wait_for',
    })

    console.log(bulkIngestResponse)
  } catch (error) {
    console.error(error)
  }
}

ingestDataIntoES()
