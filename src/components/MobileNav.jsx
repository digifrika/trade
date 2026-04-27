function MobileNav({ isOpen, onClose }) {
  const navItems = [
    'Accueil',
    'Objets Publicitaires',
    'Électroménager',
    'Hôtellerie',
    'Shop',
    'Contact',
    'Mon Compte'
  ]

  return (
    <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
      <div className="nav-backdrop" onClick={onClose}></div>
      <div className="nav-drawer">
        <div className="drawer-head">
          <div className="logo-fallback">
            Trade<span style={{ color: 'var(--orange)' }}>Innovation</span>
          </div>
          <button className="drawer-close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        {navItems.map((item, index) => (
          <a key={index} href="#" className="drawer-link" onClick={onClose}>
            {item} <i className="fas fa-chevron-right"></i>
          </a>
        ))}
        
        <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--gray-mid)' }}>
          <p style={{ fontSize: '.8rem', color: 'var(--text-muted)', marginBottom: '.8rem' }}>Contact</p>
          <p style={{ fontSize: '.85rem', fontWeight: 600, color: 'var(--navy)' }}>
            <i className="fas fa-phone" style={{ color: 'var(--orange)', marginRight: '.4rem' }}></i>
            (+221) 77 651 03 61
          </p>
          <p style={{ fontSize: '.85rem', fontWeight: 600, color: 'var(--navy)', marginTop: '.5rem' }}>
            <i className="fas fa-envelope" style={{ color: 'var(--orange)', marginRight: '.4rem' }}></i>
            tradeinnovation.sn@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}

export default MobileNav
