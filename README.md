## Elastic Search Project
A full-stack application for searching and filtering products using Elasticsearch.

## Prerequisites

- Node.js
- PostgreSQL
- Elasticsearch cloud account and API key
- npm or yarn

#### Backend 
1. To run backend first create a `.env` file and add your Elastic Search Api key & url and your Postgre connection string
   ```javascript
   API_KEY = your_api_key
   ELASTIC_URL = your_elastic_connection
   POSTGRE_URL = your_postgre_connection
   ```
4. run `npm install`
5. run `npm run dev`

To create a product index run `npm run index`
To inject data from PostgreSQL into Elastic Search run `npm run inject`

#### Frontend
1. Run `npm install`
2. run `npm run dev`

#### Why ElasticSearch make sense for this application

Search is a core feature of a marketplace. In order to keep your users and sellers happy, you need to make sure the results for the search are relevant.
ElasticSearch is great for full-text search and relevance ranking.

#### ElasticSearch for Search, PostgreSQL as the Database
PostgreSQL remains the authoritative data source, while ElasticSearch handles search operations.

**Why?**
This application does not currently support adding new products. However, in a real-world scenario, data is typically updated regularly.
ElasticSearch is optimized for read operations and is not really suitable for transactional workloads that require ACID compliance.
Although this application does not provide full marketplace functionality, this decision follows a standard pattern to support possible future scaling.

**Trade-offs**
Currently, you must manually run a script to ingest data from PostgreSQL into ElasticSearch, which means data may not always be up to date.
In a real-world setup, you would implement a data pipeline, however, some latency would still exist, meaning that ElasticSearch data will always be slightly behind PostgreSQL.
In this case this means prioritizing data integrity.
