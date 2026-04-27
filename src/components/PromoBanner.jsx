import useCountdown from '../hooks/useCountdown'
import '../styles/PromoBanner.css'

function PromoBanner({ showToast }) {
  const { hours, minutes, seconds } = useCountdown()

  const copyCode = () => {
    navigator.clipboard.writeText('FREE11CISKO').catch(() => {})
    showToast('Code FREE11CISKO copié ! 🎉')
  }

  return (
    <section className="section" style={{ paddingTop: 0, paddingBottom: '3rem' }}>
      <div className="container">
        <div className="promo-banner reveal">
          <div className="promo-decor"></div>
          <div className="promo-decor2"></div>
          <div className="promo-left">
            <div className="promo-tag">🎉 Offre de bienvenue</div>
            <div className="promo-title">Remise exceptionnelle<br />sur votre 1er achat</div>
            <div className="promo-sub">Utilisez ce code lors du paiement et profitez d'une réduction immédiate sur l'ensemble de votre commande.</div>
            <div className="promo-code-box">
              <div>
                <div className="promo-code-label">Code promo</div>
                <div className="promo-code">FREE11CISKO</div>
              </div>
              <button className="promo-copy" onClick={copyCode}>
                <i className="fas fa-copy"></i> Copier
              </button>
            </div>
          </div>
          <div className="promo-right">
            <p style={{ 
              color: 'rgba(255,255,255,.5)', 
              fontSize: '.78rem', 
              marginBottom: '.8rem', 
              textTransform: 'uppercase', 
              letterSpacing: '.08em' 
            }}>
              Offre expire dans
            </p>
            <div className="promo-timer">
              <div className="timer-box">
                <span className="timer-num">{hours}</span>
                <span className="timer-label">Heures</span>
              </div>
              <div className="timer-box">
                <span className="timer-num">{minutes}</span>
                <span className="timer-label">Min</span>
              </div>
              <div className="timer-box">
                <span className="timer-num">{seconds}</span>
                <span className="timer-label">Sec</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PromoBanner
