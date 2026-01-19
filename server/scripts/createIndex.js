import mappings from '../elastic/mappings.js'
import client from '../elastic/elastic.js'

// This is a script for index creation
// Run to create an index

const createIndex = async () => {
  try {
    // Checking if index already exists
    const indexExists = await client.indices.exists({
      index: mappings.index,
    })

    if (indexExists) {
      console.log('Index already exists')
      return null
    }

    // If index doesn't exist - create
    await client.indices.create({
      index: mappings.index,
      body: mappings.body,
    })
    console.log('Index created successfully')
  } catch (error) {
    console.error('Error cerating an index')
    console.log(error)
  }
}

createIndex()
