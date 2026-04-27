import '../styles/ClientsMarquee.css'

const clients = [
  { name: 'Sonatel', icon: 'building' },
  { name: 'Radisson Dakar', icon: 'hotel' },
  { name: 'Orange Sénégal', icon: 'briefcase' },
  { name: 'Clinique du Cap', icon: 'hospital' },
  { name: 'Air Sénégal', icon: 'plane' },
  { name: 'UCAD', icon: 'university' },
  { name: 'Auchan Sénégal', icon: 'shopping-cart' }
]

function ClientsMarquee() {
  return (
    <div className="clients">
      <div className="marquee-wrap">
        {[...clients, ...clients].map((client, index) => (
          <div key={index} className="client-logo">
            <i className={`fas fa-${client.icon}`}></i>
            {client.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientsMarquee
