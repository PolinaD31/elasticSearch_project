import { Pool } from 'pg'
import 'dotenv/config'

const pool = new Pool({
  connectionString: process.env.POSTGRE_URL,
})

pool.on('error', (err) => {
  console.error('Unexpected PG error:', err)
})

const connectToDatabase = async () => {
  try {
    await pool.query('SELECT 1')
    console.log('Connected to DB')
  } catch (err) {
    console.error('DB connection failed', err)
    process.exit(1)
  }
}

export { pool, connectToDatabase }
