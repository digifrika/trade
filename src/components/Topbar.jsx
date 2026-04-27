function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-left">
          <span><i className="fas fa-phone"></i>(+221) 77 651 03 61</span>
          <span><i className="fas fa-envelope"></i>tradeinnovation.sn@gmail.com</span>
          <span><i className="fas fa-map-marker-alt"></i>Sacré Cœur 3 VDN, Dakar</span>
        </div>
        <div className="topbar-right">
          <span className="promo-pill">Code promo : FREE11CISKO</span>
          <a href="#"><i className="fas fa-truck"></i>Livraison internationale</a>
          <a href="#"><i className="fas fa-rotate-left"></i>Retours 45j</a>
        </div>
      </div>
    </div>
  )
}

export default Topbar
