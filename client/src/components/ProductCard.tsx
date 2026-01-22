import type { Product } from '../shared/types'

type Props = {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="card card-border bg-base-100 w-96">
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p>{product.description?.slice(0, 150)}...</p>
        <span>Color: {product.color}</span>
        <div className="flex justify-between text-sm">
          <span>Rating: {product.rating}</span>
          <span>Gender: {product.gender}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">{product.brand}</span>
          <span className="text-lg font-bold">{product.price}€</span>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
