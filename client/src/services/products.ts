import axios from 'axios'
import type { Product } from '../shared/types'
import type { SearchFilters } from '../components/SearchPage/types'

const baseUrl = 'http://localhost:3001/api/search'

const search = async (filters: SearchFilters) => {
  // Note: add validation later
  const { data } = await axios.get<Product[]>(baseUrl, {
    params: filters,
  })
  return data
}

export default { search }
