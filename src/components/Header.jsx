function Header({ cartCount, onMenuToggle, onCartClick }) {
  const handleLogoError = (e) => {
    e.target.style.display = 'none'
    if (e.target.nextElementSibling) {
      e.target.nextElementSibling.style.display = 'block'
    }
  }

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#" className="logo">
          <img 
            src="https://tradeinnovation-sn.com/wp-content/uploads/2025/09/logo-trade-innovation.png"
            alt="Trade Innovation"
            onError={handleLogoError}
          />
          <div className="logo-fallback" style={{ display: 'none' }}>
            Trade<span>Innovation</span>
          </div>
        </a>
        
        <div className="search-bar">
          <input type="text" placeholder="Rechercher climatiseur, flyers, savon…" />
          <button><i className="fas fa-search"></i></button>
        </div>

        <div className="header-actions">
          <button className="header-icon-btn">
            <i className="fas fa-heart"></i>
            <span>Favoris</span>
          </button>
          <button className="header-icon-btn" onClick={onCartClick}>
            <i className="fas fa-shopping-bag"></i>
            <span>Panier</span>
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </button>
          <button className="header-icon-btn">
            <i className="fas fa-user"></i>
            <span>Compte</span>
          </button>
          <button className="menu-toggle" onClick={onMenuToggle}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
