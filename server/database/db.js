import { Pool } from 'pg'
import 'dotenv/config'

const pool = new Pool({
  connectionString: process.env.POSTGRE_URL,
})

const connectToDatabase = async () => {
  try {
    await pool.connect()
    console.log('Connected to DB')
  } catch (error) {
    console.log('Error connecting to DB')
  }
}

export { pool, connectToDatabase }
