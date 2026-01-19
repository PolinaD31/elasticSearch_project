const mappings = {
  index: 'slush_products',
  mappings: {
    properties: {
      id: {
        type: 'integer',
      },
      title: {
        type: 'text',
      },
      description: {
        type: 'text',
      },
      category: {
        type: 'keyword',
      },
      brand: {
        type: 'keyword',
      },
      color: {
        type: 'keyword',
      },
      gender: {
        type: 'keyword',
      },
      price: {
        type: 'double',
      },
      rating: {
        type: 'double',
      },
      created_at: {
        type: 'date',
      },
    },
  },
}

export default mappings
