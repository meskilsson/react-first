import ProductItem from './ProductItem'
import './Products.css'

function ProductList({ products }) {
    return (
        <div className="products-section">
            <ul className="products-container">
                {products.map((product) => (
                    <ProductItem
                        key={product.id}
                        product={product}
                    />
                ))}
            </ul>
        </div>
    )
}

export default ProductList
