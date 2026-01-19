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
