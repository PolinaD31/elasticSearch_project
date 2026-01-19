import type { Product } from '../shared/types'
import ProductCard from './ProductCard'

type Props = {
  products: Product[]
}

const Products = ({ products }: Props) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <p className="text-gray-600">{products.length} products found</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0"
            style={{
              width: '100%',
              maxWidth: '384px',
              minWidth: '300px',
            }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
