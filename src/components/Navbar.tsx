'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import PrickyLogo from './PrickyLogo'

interface NavbarProps {
  onOpenLeadModal: (source?: string) => void
}

export default function Navbar({ onOpenLeadModal }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(250, 249, 245, 0.94)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border-hairline)',
        transition: 'all 0.2s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '84px',
          maxWidth: '1180px',
        }}
      >
        {/* Brand Logo */}
        <Link href="/" title="PrickyAI Home" style={{ textDecoration: 'none' }}>
          <PrickyLogo size={36} />
        </Link>

        {/* Minimal Desktop Navigation: Product, Pricing, FAQ, Blogs ONLY */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '40px',
          }}
          className="desktop-menu"
        >
          <a
            href="#features"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--text-muted)',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            Product
          </a>
          <a
            href="#pricing"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--text-muted)',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            Pricing
          </a>
          <a
            href="#faq"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--text-muted)',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            FAQ
          </a>
          <a
            href="#blogs"
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--text-muted)',
              transition: 'color 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            Blogs
          </a>
        </nav>

        {/* Action Buttons */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '22px',
          }}
          className="desktop-actions"
        >
          <button
            onClick={() => onOpenLeadModal('Navbar Sign In')}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '13.5px',
              fontWeight: 500,
              color: 'var(--text-muted)',
              transition: 'color 0.15s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-main)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            Sign In
          </button>

          <button
            onClick={() => onOpenLeadModal('Navbar Free Revision')}
            className="btn-minimal-dark"
            style={{
              padding: '12px 24px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
            }}
          >
            Start Free Revision <ArrowUpRight size={15} />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation"
          style={{
            display: 'block',
            color: 'var(--text-main)',
            padding: '8px',
          }}
          className="mobile-toggle"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: 'var(--bg-canvas)',
            borderBottom: '1px solid var(--border-medium)',
            padding: '28px 32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <a
            href="#features"
            onClick={() => setMobileOpen(false)}
            style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--text-main)' }}
          >
            Product
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileOpen(false)}
            style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--text-main)' }}
          >
            Pricing
          </a>
          <a
            href="#faq"
            onClick={() => setMobileOpen(false)}
            style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--text-main)' }}
          >
            FAQ
          </a>
          <a
            href="#blogs"
            onClick={() => setMobileOpen(false)}
            style={{ fontSize: '18px', fontFamily: 'var(--font-serif)', color: 'var(--text-main)' }}
          >
            Blogs
          </a>
          <div style={{ height: '1px', backgroundColor: 'var(--border-hairline)', margin: '8px 0' }} />
          <button
            onClick={() => {
              setMobileOpen(false)
              onOpenLeadModal('Mobile Start Revision')
            }}
            className="btn-minimal-dark"
            style={{ justifyContent: 'center', width: '100%', padding: '14px' }}
          >
            Start Free Revision <ArrowUpRight size={16} />
          </button>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 900px) {
          :global(.desktop-menu) {
            display: flex !important;
          }
          :global(.desktop-actions) {
            display: flex !important;
          }
          :global(.mobile-toggle) {
            display: none !important;
          }
        }
      `}</style>
    </header>
  )
}
