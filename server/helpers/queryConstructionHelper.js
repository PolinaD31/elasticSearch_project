const queryConstructionHelper = (searchParams) => {
  const { searchTerm, category, gender, color, sortOrder, brand } = searchParams

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
                factor: 1.4,
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
        type: 'cross_fields',
        // If we do the sorting we want closer matches
        operator: sortOrder === '' ? 'or' : 'and',
      },
    })

    // Higher relevance scores for products that match the should clause
    query.body.query.function_score.query.bool.should = [
      {
        multi_match: {
          query: searchTerm,
          fields: ['title^2', 'description'],
          // Combines scores across all field
          type: 'cross_fields',
          operator: 'and',
          boost: 5
        },
      },
      // Boost products whose category matches the search term
      {
    match: {
      "category.search": {
        query: searchTerm,
        boost: 3
      }
    }
  },
    ]
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

  // Add color filter if provided
  if (color !== '') {
    query.body.query.function_score.query.bool.filter.push({
      term: { color: color },
    })
  }

  // Add brand filter if provided
  if (brand !== '') {
    query.body.query.function_score.query.bool.filter.push({
      term: { brand: brand },
    })
  }

  // Add sorting by price
  if (sortOrder !== '') {
    query.body.sort.push({
      price: {
        order: sortOrder,
      },
    })
  }

  return query
}

export default queryConstructionHelper
