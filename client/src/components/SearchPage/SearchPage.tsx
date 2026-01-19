import { useState, useEffect } from 'react'
import Dropdown from '../../shared/Dropdown'
import productsService from '../../services/products'
import type { SearchFilters } from './types'
import type { Product } from '../../shared/types'
import { productCategoryOptions, productColorOptions, productBrandOptions, GenderOptions } from './types'
import Products from '../Products'
import SearchBar from '../SearchBar'

const DEFAULT_FILTERS: SearchFilters = {
  searchTerm: '',
  category: '',
  gender: '',
  color: '',
  sortOrder: '',
  brand: ''
}

const SearchPage = () => {
  const [filters, setFilters] = useState<SearchFilters>(DEFAULT_FILTERS)
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchInitialProducts = async () => {
      try {
        const data = await productsService.search(DEFAULT_FILTERS)
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      } 
    }

    fetchInitialProducts()
  }, []) 

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFilters((filters) => ({
      ...filters,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const data = await productsService.search(filters)
      setProducts(data)
    } catch (error) {
      console.error('Error searching products:', error)
    }
  }

  // console.log('render')

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          <SearchBar searchTerm={filters.searchTerm} handleChange={handleChange} />
          <div className="w-full md:w-1/8">
            <Dropdown
              value={filters.category}
              name="category"
              onChange={handleChange}
              options={productCategoryOptions}
              text='Category'
            />
          </div>
          <div className="w-full md:w-1/10">
            <Dropdown
              value={filters.gender}
              name="gender"
              onChange={handleChange}
              options={GenderOptions}
              text='Gender'
            />
          </div>
          <div className="w-full md:w-1/10">
            <Dropdown
              value={filters.color}
              name="color"
              onChange={handleChange}
              options={productColorOptions}
              text='Color'
            />
          </div>
          <div className="w-full md:w-1/10">
            <Dropdown
              value={filters.brand}
              name="brand"
              onChange={handleChange}
              options={productBrandOptions}
              text='Brand'
            />
          </div>
          <div className="w-full md:w-1/10">
            <Dropdown
              value={filters.sortOrder}
              name="sortOrder"
              onChange={handleChange}
              options={['asc', 'desc']}
              text='Sort by price'
            />
          </div>
          <div className="md:w-auto">
            <button
              type="submit"
              className="btn btn-primary w-full md:w-auto px-8 py-3"
            >
              Search
            </button>
          </div>
        </div>
      </form>
      <Products products={products} />
    </div>
  )
}

export default SearchPage
