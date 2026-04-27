import { useState, useEffect } from 'react'
import Topbar from './components/Topbar'
import Header from './components/Header'
import Navigation from './components/Navigation'
import MobileNav from './components/MobileNav'
import HeroSlider from './components/HeroSlider'
import ClientsMarquee from './components/ClientsMarquee'
import Avantages from './components/Avantages'
import Categories from './components/Categories'
import ProductsSection from './components/ProductsSection'
import PromoBanner from './components/PromoBanner'
import ElectroSection from './components/ElectroSection'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Toast from './components/Toast'
import './styles/App.css'

function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [toast, setToast] = useState({ show: false, message: '' })
  const [cartCount, setCartCount] = useState(3)

  const showToast = (message) => {
    setToast({ show: true, message })
    setTimeout(() => setToast({ show: false, message: '' }), 3000)
  }

  const addToCart = () => {
    setCartCount(prev => prev + 1)
    showToast('Ajouté au panier ✓')
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
          observer.unobserve(e.target)
        }
      })
    }, { threshold: .12 })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      <Topbar />
      <Header 
        cartCount={cartCount} 
        onMenuToggle={() => setMobileNavOpen(true)}
        onCartClick={() => showToast('Panier ouvert')}
      />
      <Navigation />
      <MobileNav 
        isOpen={mobileNavOpen} 
        onClose={() => setMobileNavOpen(false)} 
      />
      
      <main>
        <HeroSlider />
        <ClientsMarquee />
        <Avantages />
        <Categories onCategoryClick={showToast} />
        <ProductsSection 
          title="Produits tendance"
          label="Sélection de la semaine"
          products={trendingProducts}
          onAddToCart={addToCart}
        />
        <PromoBanner showToast={showToast} />
        <ElectroSection onAddToCart={addToCart} />
        <Newsletter showToast={showToast} />
      </main>

      <Footer />
      <Toast show={toast.show} message={toast.message} />
    </div>
  )
}

const trendingProducts = [
  {
    id: 1,
    image: 'https://tradeinnovation-sn.com/wp-content/uploads/2021/09/Carte-de-visite-Mockup-1-400x400.jpg',
    badge: '⚡ Promo',
    category: 'Objet Publicitaire',
    name: '100 Cartes de visite personnalisées Bristol 250g',
    price: '10000 FCFA',
    originalPrice: null
  },
  {
    id: 2,
    image: 'https://tradeinnovation-sn.com/wp-content/uploads/2021/09/mockup-afficge-400x400.jpg',
    badge: '🏷️ Best',
    category: 'Impression',
    name: 'Flyers / Tracts — 1 000 exemplaires',
    price: '35 FCFA',
    originalPrice: '50 FCFA'
  },
  {
    id: 3,
    image: 'https://tradeinnovation-sn.com/wp-content/uploads/2025/09/ed97b87d-af2d-4f59-b82b-1165e635b2ae-400x400.jpeg',
    badge: 'En stock',
    badgeType: 'stock',
    category: 'Climatiseur',
    name: 'SPLIT LG 9000 BTU Normal GAZ 410 S4C09TZCAA',
    price: '230000 FCFA',
    originalPrice: null
  },
  {
    id: 4,
    image: 'https://tradeinnovation-sn.com/wp-content/uploads/2025/12/89ff2641-a948-4996-ad3b-801b30e9a6ec-2-400x400.jpg',
    badge: 'Nouveau',
    category: 'Petit Électroménager',
    name: 'Aspirateur Samsung 1600W VCC4320S3A',
    price: '85000 FCFA',
    originalPrice: null
  },
  {
    id: 5,
    image: 'https://tradeinnovation-sn.com/wp-content/uploads/2021/09/Polo-400x400.jpg',
    badge: null,
    category: 'Objet Publicitaire',
    name: 'Broderie sur polo — prix unitaire dès 25 ex',
    price: '3500 FCFA',
    originalPrice: null
  },
  {
    id: 6,
    image: 'https://tradeinnovation-sn.com/wp-content/uploads/2025/12/82fee14e-8493-4a12-91f8-e4c1024a17c8-400x400.jpg',
    badge: 'Nouveau',
    category: 'Petit Électroménager',
    name: 'Batteuse Lefon avec bol Noir/Gris LFSM6652',
    price: '20000 FCFA',
    originalPrice: null
  },
  {
    id: 7,
    image: 'https://tradeinnovation-sn.com/wp-content/uploads/2021/09/CALENDIER-400x400.jpg',
    badge: '⏳ Limité',
    category: 'Objet Publicitaire',
    name: 'Calendrier personnalisé — 500 exemplaires',
    price: '115 FCFA',
    originalPrice: null
  },
  {
    id: 8,
    image: 'https://tradeinnovation-sn.com/wp-content/uploads/2021/09/catalogue-400x400.jpg',
    badge: null,
    category: 'Impression',
    name: 'Plaquette / Dépliant — dès 100 exemplaires',
    price: '275 FCFA',
    originalPrice: null
  }
]

export default App
