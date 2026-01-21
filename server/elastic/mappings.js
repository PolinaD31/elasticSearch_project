const mappings = {
  index: 'products',
  mappings: {
    properties: {
      id: { type: 'integer' },
      title: {
        type: 'text'
      },
      description: {
        type: 'text'
      },
      brand: { type: 'keyword' },
      category: {
  type: "keyword",
  fields: {
    search: { type: "text", analyzer: "english" }
  }
},
      color: { type: 'keyword' },
      gender: { type: 'keyword' },
      price: { type: 'double' },
      rating: { type: 'double' },
      created_at: { type: 'date' }
    }
  }
}

export default mappings
