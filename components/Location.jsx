'use client'
import React from 'react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locationHighlights = [
  'Located in KPHB Phase IV, offering quick access to key commercial and residential areas of Kukatpally.',
  'Close proximity to HITEC City, one of Hyderabad\'s largest IT employment hubs.',
  'Well connected to Miyapur and Jubilee Hills via major road networks.',
  'Easy accessibility to KPHB Colony Metro Station for smooth daily commuting across Hyderabad.',
  'Surrounded by reputed educational institutions, shopping centers, and healthcare facilities within a short driving distance.',
  'Close to prominent malls like Forum Sujana Mall for retail, dining, and entertainment experiences.',
  'Seamless connectivity to the Outer Ring Road, enabling quick travel to airport and major corridors.',
]

const Location = () => {
  return (
    <section id="location" style={{
      padding: '56px 0',
      background: '#f8f9fa',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Cpath d='M24 2 L46 24 L24 46 L2 24 Z' fill='none' stroke='%23e5e7eb' stroke-width='0.5'/%3E%3C/svg%3E")`,
      backgroundSize: '48px 48px',
      borderBottom: '1px solid #e5e7eb',
    }}>
      <div className="container mx-auto px-4 md:px-8">

        {/* Section Header */}
        <div style={{ marginBottom: '36px', textAlign: 'center' }} data-aos="fade-up">
          <span style={{
            display: 'inline-block', padding: '4px 16px',
            background: 'var(--color-teal-bg)', borderRadius: '50px',
            fontSize: '11px', fontWeight: '700', color: 'var(--color-teal)',
            fontFamily: F_JOST, letterSpacing: '0.1em', textTransform: 'uppercase',
            border: '1px solid var(--color-teal-light)', marginBottom: '10px',
          }}>Kukatpally, Hyderabad</span>
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '800', fontSize: '26px',
            color: '#111827', margin: '0 0 6px', letterSpacing: '-0.01em',
          }}>
            Location{' '}
            <span style={{ color: 'var(--color-teal)' }}>Advantages</span>
          </h2>
          <div style={{ width: '60px', height: '3px', background: 'linear-gradient(90deg, var(--color-teal), var(--color-teal-light))', borderRadius: '2px', margin: '8px auto 12px' }} />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* LEFT — Highlights List */}
          <div className="w-full lg:w-[45%]" data-aos="fade-right">
            <div style={{
              background: '#fff',
              borderRadius: '16px',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
              border: '1px solid #f0f0f0',
              overflow: 'hidden',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              {locationHighlights.map((item, i) => (
                <div 
                  key={i} 
                  style={{ 
                    padding: '18px 24px',
                    borderBottom: i < locationHighlights.length - 1 ? '1px solid #f0f0f0' : 'none',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    transition: 'background 0.3s ease',
                  }}
                  className="hover:bg-gray-50"
                >
                  <div style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--color-teal)',
                    marginTop: '8px',
                    flexShrink: 0,
                  }} />
                  <p style={{
                    fontSize: '14px',
                    lineHeight: '1.6',
                    color: '#4b5563',
                    fontFamily: F_SANS,
                    margin: 0,
                    fontWeight: '500',
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="w-full lg:flex-1" data-aos="fade-left" style={{ minHeight: '420px' }}>
            <div style={{
              borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 8px 32px var(--color-shadow-inner)',
              border: '2px solid var(--color-teal)',
              height: '100%', minHeight: '420px',
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(90deg, var(--color-teal), var(--color-teal-light))', zIndex: 10,
              }} />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12546.935125005142!2d78.390815!3d17.473807!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910011568541%3A0xca05c08dad16534e!2sGodrej%20Properties%20Kukatpally!5e1!3m2!1sen!2sin!4v1777263638100!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
                background: 'var(--color-teal)', opacity: 0.9, backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  color: '#fff', fontSize: '11px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  Kukatpally, Hyderabad
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
