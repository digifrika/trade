import '../styles/Toast.css'

function Toast({ show, message }) {
  return (
    <div className={`toast ${show ? 'show' : ''}`}>
      <i className="fas fa-check-circle"></i>
      <span>{message || 'Copié !'}</span>
    </div>
  )
}

export default Toast
