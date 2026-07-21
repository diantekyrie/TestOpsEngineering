const companies = [
  { name: 'Google',          logo: '/logos/google.svg' },
  { name: 'Meta',            logo: '/logos/meta.svg' },
  { name: 'Apple',           logo: '/logos/apple.svg' },
  { name: 'Samsung',         logo: '/logos/samsung.svg' },
  { name: 'Hulu',            logo: '/logos/hulu.svg' },
  { name: 'Bank of America', logo: '/logos/bankofamerica.svg' },
  { name: 'Gap',             logo: '/logos/gap.svg' },
  { name: 'Avid Technology', logo: '/logos/avid.svg' },
]

// Duplicate list so the scroll loops seamlessly
const items = [...companies, ...companies]

export default function TrustCarousel() {
  return (
    <div className="trust-bar">
      <p className="trust-bar-label wrap">Engineering background from</p>
      <div className="trust-carousel-outer">
        <div className="trust-carousel-track">
          {items.map((co, i) => (
            <div className="trust-carousel-card" key={i} aria-hidden={i >= companies.length}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={co.logo}
                alt={co.name}
                className="trust-carousel-img"
              />
              <span className="trust-carousel-name">{co.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
