const companies = [
  { name: 'Google · Pixel',    domain: 'google.com' },
  { name: 'Meta',              domain: 'meta.com' },
  { name: 'Apple',             domain: 'apple.com' },
  { name: 'Samsung',           domain: 'samsung.com' },
  { name: 'Hulu',              domain: 'hulu.com' },
  { name: 'Bank of America',   domain: 'bankofamerica.com' },
  { name: 'Gap',               domain: 'gap.com' },
  { name: 'Avid Technology',   domain: 'avid.com' },
]

// Duplicate for seamless infinite loop
const items = [...companies, ...companies]

export default function TrustCarousel() {
  return (
    <div className="trust-bar">
      <div className="trust-carousel-label wrap">Engineering background from</div>
      <div className="trust-carousel-wrap">
        <div className="trust-carousel-track">
          {items.map((co, i) => (
            <div className="trust-carousel-item" key={i}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://logo.clearbit.com/${co.domain}`}
                alt={co.name}
                width={22}
                height={22}
                className="trust-carousel-logo"
              />
              <span className="trust-carousel-name">{co.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
