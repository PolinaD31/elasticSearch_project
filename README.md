# Elastic Search Project
A full-stack application that allows users to search and filter through a clothing catalog with relevance ranking using Elasticsearch. The focus of this project is on implementing and tuning search relevance and filtering.

**Key Features:**
- Full-text search across product titles and descriptions
- Filtering by category, gender, color, and brand
- Ranking based on relevance
- Sort by price (ascending/descending)

## Scope Decisions
- Limited the marketplace to fashion only
- Focused mainly on searching and filtering functionality
- Pre-populated dataset to demonstrate search quality
- Simple frontend

### Why ElasticSearch Makes Sense for This Application
Search is a core feature of a marketplace. In order to keep users and sellers happy, search results must be relevant.
ElasticSearch provides functionality for efficient full-text search and relevance ranking, which makes it a great choice for a marketplace.

### ElasticSearch for Search, PostgreSQL as the Database
PostgreSQL remains the authoritative data source, while ElasticSearch handles search operations.

**Why?**
This application does not currently support adding new products. However, in a real-world scenario, data is typically updated regularly.
ElasticSearch is optimized for read operations and is not really suitable for transactional workloads that require ACID compliance.
Although this application does not provide full marketplace functionality, this decision follows a standard pattern to support possible future scaling.

**Trade-offs**
Currently, you must manually run a script to ingest data from PostgreSQL into ElasticSearch, which means data may not always be up to date.
In a real-world setup, you would implement a data pipeline, however, some latency would still exist, meaning that ElasticSearch data will always be slightly behind PostgreSQL.
In this case, this means prioritizing data integrity.

### ElasticSearch Index Design

**Index Structure:**
```javascript
{
  "id": "primary identifier",
  "title": "text field, weighted 2x for relevance",
  "description": "text field for full-text search",
  "category": "keyword with text subfield for relevance matching",
  "brand": "keyword field for filtering",
  "color": "keyword field for filtering",
  "gender": "keyword field for filtering",
  "price": "numeric field for filtering and sorting",
  "rating": "numeric field for quality-based boosting",
  "created_at": "date field"
}
```

### Relevance Strategy
**What is included in the search results?**
- Products that match the search phrase exactly appear on top
- Products that partially match the search phrase still appear, but lower
- Products whose category is related to the search appear higher
- Products that have higher ratings appear higher
  
**Why this approach?**
Marketplace searches need to show relevant products, while also allowing the discovery of other products. Users should be able to easily find exact matches when they exist but also be able to discover relevant alternatives. 

**With proposed relevance strategy:** 
- Most relevant items appear first
- Quality products get good visibility
- Users can find similar items when exact matches don't exist

# Running the project
Below are the instructions on how to run this project

## Prerequisites
- Node.js
- PostgreSQL
- Elasticsearch cloud account and API key
- npm or yarn
- Docker (optional)

### Backend 
1. To run backend, first create a `.env` file and add your Elastic Search API key & url and your PostgreSQL connection string
   ```javascript
   API_KEY = your_api_key
   ELASTIC_URL = your_elastic_connection
   POSTGRE_URL = your_postgre_connection
   ```
2. run `npm install`
3. run `npm run dev`

To create a product index run `npm run index`
To inject data from PostgreSQL into ElasticSearch run `npm run inject`

### Frontend
1. Run `npm install`
2. run `npm run dev`

### Running the project using Docker
1. In the root of the project run ` docker build -t elasticSearch-project .`
2. Run `docker run -p 8080:8080 elasticSearch-project`. This will start the project on port 8080

# Deployment
Deployed application can be found by following this link: https://elasticsearch-slush-997355305067.europe-west1.run.app/


