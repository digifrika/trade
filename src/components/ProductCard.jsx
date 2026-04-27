import '../styles/ProductCard.css'

function ProductCard({ product, onAddToCart }) {
  const badgeClass = product.badgeType === 'stock' ? 'product-badge stock' : 'product-badge'

  return (
    <div className="product-card reveal">
      <div className="product-img">
        <img src={product.image} alt={product.name} />
        {product.badge && <span className={badgeClass}>{product.badge}</span>}
        <div className="product-wishlist">
          <i className="fas fa-heart"></i>
        </div>
      </div>
      <div className="product-body">
        <div className="product-cat">{product.category}</div>
        <div className="product-name">{product.name}</div>
        <div className="product-price">
          {product.originalPrice && <span>{product.originalPrice}</span>}
          {product.price}
        </div>
        <button className="btn-cart" onClick={onAddToCart}>
          <i className="fas fa-shopping-bag"></i> Ajouter au panier
        </button>
      </div>
    </div>
  )
}

export default ProductCard
