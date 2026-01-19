import { Client } from '@elastic/elasticsearch'
import 'dotenv/config'

const client = new Client({
  node: process.env.ELASTIC_URL,
  auth: {
    apiKey: process.env.API_KEY,
  },
  serverMode: 'serverless',
})

export const checkClient = async () => {
  try {
    await client.ping()
    console.log('Sucessfully connected to ElasticSearch')
  } catch {
    console.error('Error connecting to ElasticSearch')
  }
}

export default client
