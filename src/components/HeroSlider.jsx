import { useState, useEffect, useCallback } from 'react'
import '../styles/HeroSlider.css'

const slides = [
  {
    id: 1,
    tag: 'Objets Publicitaires',
    title: 'Votre Marque,',
    titleHighlight: 'Notre Impact',
    subtitle: 'Cartes de visite, flyers, affiches, broderie — donnez de la visibilité à votre entreprise.',
    cta: 'Découvrir',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1400&q=80'
  },
  {
    id: 2,
    tag: 'Promo Rentrée 2026',
    title: 'Équipez\nvotre',
    titleHighlight: 'foyer',
    subtitle: 'Climatiseurs LG, téléviseurs, réfrigérateurs, machines à laver — au meilleur prix à Dakar.',
    cta: 'Voir les offres',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1400&q=80'
  },
  {
    id: 3,
    tag: 'Gamme Hôtellerie',
    title: 'Gamme',
    titleHighlight: 'Arganine',
    subtitle: "Produits d'hygiène premium pour hôtels, résidences et structures d'accueil.",
    cta: 'Explorer',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1400&q=80'
  }
]

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index)
  }, [])

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <section className="hero">
      <div 
        className="slides-track" 
        style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
      >
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div 
              className="slide-bg" 
              style={{ backgroundImage: `url('${slide.image}')` }}
            ></div>
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <span className="slide-tag">{slide.tag}</span>
              <h1 className="slide-title">
                {slide.title}<br />
                <span>{slide.titleHighlight}</span>
              </h1>
              <p className="slide-sub">{slide.subtitle}</p>
              <a href="#" className="slide-cta">
                {slide.cta} <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

      <button className="hero-arrow hero-prev" onClick={prevSlide}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button className="hero-arrow hero-next" onClick={nextSlide}>
        <i className="fas fa-chevron-right"></i>
      </button>

      <div className="hero-nav">
        {slides.map((_, index) => (
          <div 
            key={index}
            className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </section>
  )
}

export default HeroSlider
