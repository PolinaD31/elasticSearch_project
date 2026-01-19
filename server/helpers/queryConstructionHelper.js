const queryConstructionHelper = (searchParams) => {
  const { searchTerm, category, gender, color, sortOrder } = searchParams

  console.log('Generating search query with params:', searchParams)

  // Base query
  const query = {
    index: 'products',
    body: {
      query: {
        function_score: {
          query: {
            bool: {
              must: [],
              filter: [],
            },
          },
          functions: [
            {
              // Boosting based on rating for every query
              field_value_factor: {
                field: 'rating',
                // Relatively small boost, does not dominate over text relevance
                factor: 1.2,
                modifier: 'sqrt',
                // Missing ranking nevatively affects the relevancy
                missing: 2,
              },
            },
          ],
        },
      },
      size: 800,
      sort: [],
    },
  }

  // Add searching by text if it is provided
  if (searchTerm !== '') {
    query.body.query.function_score.query.bool.must.push({
      multi_match: {
        query: searchTerm,
        fields: ['title^2', 'description'],
        type: 'phrase',
        slop: 3
      },
    })
  } else {
    query.body.query.function_score.query.bool.must.push({
      match_all: {},
    })
  }

  // Add category filter if provided
  if (category !== '') {
    query.body.query.function_score.query.bool.filter.push({
      term: { category: category },
    })
  }

  // Add gender filter if provided
  if (gender !== '') {
    query.body.query.function_score.query.bool.filter.push({
      term: { gender: gender },
    })
  }

  if (color !== '') {
    query.body.query.function_score.query.bool.filter.push({
      term: { color: color },
    })
  }

  // Add sorting by price
  if (sortOrder !== '') {
    query.body.sort.push({
      price: {
        order: sortOrder
      }
    })
  }

  return query
}

export default queryConstructionHelper
