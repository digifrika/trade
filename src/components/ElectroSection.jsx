import { useState } from 'react'
import ProductCard from './ProductCard'
import '../styles/Categories.css'
import '../styles/ElectroSection.css'

const filters = [
  'Tous',
  'Climatiseurs',
  'Réfrigérateurs',
  'Cuisinières',
  'Téléviseurs',
  'Machines à laver',
  'Micro-ondes',
  'Aspirateurs'
]

const electroProducts = [
  {
    id: 1,
    image: 'https://tradeinnovation-sn.com/wp-content/uploads/2025/12/4fadf1a5-b5e9-496d-8609-357190a3b8a2-400x400.jpg',
    badge: 'Nouveau',
    category: 'Petit Électroménager',
    name: 'Batteuse Smart Technology Électrique STPE815D',
    price: '15010 FCFA',
    originalPrice: null
  },
  {
    id: 2,
    image: 'https://tradeinnovation-sn.com/wp-content/uploads/2025/12/b2b8f678-53d3-42a2-a1de-e107f0a70ff3-400x400.jpg',
    badge: null,
    category: 'Petit Électroménager',
    name: 'Batteuse Decakila KEMG029B',
    price: '50000 FCFA',
    originalPrice: null
  },
  {
    id: 3,
    image: 'https://tradeinnovation-sn.com/wp-content/uploads/2025/12/71aa260b-022d-4b53-b202-dfd0867fda4d-400x400.jpg',
    badge: '⚡ Promo',
    category: 'Aspirateur',
    name: 'Aspirateur Camtech Vacuum Cleaner HW 1705B',
    price: '60000 FCFA',
    originalPrice: null
  },
  {
    id: 4,
    image: 'https://tradeinnovation-sn.com/wp-content/uploads/2025/12/80037fcb-951d-43d6-b3b1-d44d14f21571-400x400.jpg',
    badge: null,
    category: 'Aspirateur',
    name: 'Aspirateur Samsung 1800W VCC4540S36',
    price: '90000 FCFA',
    originalPrice: null
  }
]

function ElectroSection({ onAddToCart, showToast }) {
  const [activeFilter, setActiveFilter] = useState('Tous')

  const handleFilterClick = (filter) => {
    setActiveFilter(filter)
    if (showToast) {
      showToast(`Filtre : ${filter}`)
    }
  }

  return (
    <section className="section section-alt">
      <div className="container">
        <div className="section-head reveal">
          <div>
            <div className="section-label">Gros & petit électroménager</div>
            <h2 className="section-title">Notre gamme <span>électroménager</span></h2>
          </div>
          <a href="#" className="view-all">Tout voir <i className="fas fa-arrow-right"></i></a>
        </div>
        <div className="electro-filters reveal">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="products-grid">
          {electroProducts.map(product => (
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

export default ElectroSection
