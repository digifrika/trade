import '../styles/Newsletter.css'

function Newsletter({ showToast }) {
  const handleSubscribe = () => {
    showToast('Inscription réussie ! 🎉')
  }

  return (
    <section className="newsletter">
      <div className="newsletter-inner reveal">
        <div className="section-label">Newsletter</div>
        <h2 className="section-title">Nos meilleures <span>offres</span> dans votre boîte</h2>
        <p>Abonnez-vous pour recevoir en avant-première nos promotions, nouveaux produits et codes exclusifs.</p>
        <div className="newsletter-form">
          <input type="email" placeholder="votre@email.com" />
          <button className="btn-primary" onClick={handleSubscribe}>
            <i className="fas fa-paper-plane"></i> S'abonner
          </button>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
