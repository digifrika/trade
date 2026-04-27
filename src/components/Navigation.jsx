function Navigation() {
  const navItems = [
    { label: 'Tout', icon: 'th', isAll: true },
    { label: 'Accueil', isActive: true },
    { 
      label: 'Objets Publicitaires', 
      hasDropdown: true,
      dropdownItems: [
        'Cartes de visite',
        'Flyers / Tracts',
        'Affiches publicitaires',
        'Plaquettes / Dépliants',
        'Calendriers',
        'Broderie'
      ]
    },
    { 
      label: 'Électroménager', 
      hasDropdown: true,
      dropdownItems: [
        'Climatiseurs',
        'Réfrigérateurs',
        'Cuisinières',
        'Congélateurs',
        'Machines à laver',
        'Téléviseurs',
        'Micro-ondes',
        'Petit électroménager'
      ]
    },
    { 
      label: 'Hôtellerie', 
      hasDropdown: true,
      dropdownItems: [
        'Gel',
        'Gel Cheveux',
        'Lotion',
        'Savon Plissé',
        'Shampooing & Conditionneur',
        'Gamme Arganine'
      ]
    },
    { label: 'Shop' },
    { label: 'Contact' }
  ]

  return (
    <nav className="nav">
      <div className="nav-inner">
        {navItems.map((item, index) => (
          <div key={index} className="nav-item">
            <a 
              href="#" 
              className={`nav-link ${item.isAll ? 'nav-all' : ''} ${item.isActive ? 'active' : ''}`}
            >
              {item.icon && <i className={`fas fa-${item.icon}`}></i>}
              {item.label}
              {item.hasDropdown && <i className="fas fa-chevron-down"></i>}
            </a>
            {item.hasDropdown && (
              <div className="dropdown">
                {item.dropdownItems.map((subItem, subIndex) => (
                  <a key={subIndex} href="#">{subItem}</a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  )
}

export default Navigation
