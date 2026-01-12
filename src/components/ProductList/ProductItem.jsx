import './Products.css'

function ProductItem({ product }) {





    return (

        <li className="product-card">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            {product.price < 20 && product.inStock && (
                <p className="on-sale">On sale!</p>
            )}
            <img src={product.img} alt={product.name} />
            <p>{product.category}</p>
            {!product.inStock && (
                <p className="out-of-stock">Out of stock!</p>
            )}
        </li>

    )
}

export default ProductItem;

