import ProductCard from './ProductCard'
import '../styles/Categories.css'

function ProductsSection({ title, label, products, onAddToCart }) {
  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-label">{label}</div>
            <h2 className="section-title">{title.split(' ').slice(0, -1).join(' ')} <span>{title.split(' ').pop()}</span></h2>
          </div>
          <a href="#" className="view-all">Tout voir <i className="fas fa-arrow-right"></i></a>
        </div>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
