'use client'

import React, { useState } from 'react'
import { ChevronDown, Mail } from 'lucide-react'
import PrickyLogo from './PrickyLogo'

export default function Footer() {
  const [region, setRegion] = useState('🇬🇧 United Kingdom')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const regions = [
    '🇬🇧 United Kingdom',
    '🇮🇳 India',
    '🇸🇬 Singapore',
    '🇲🇾 Malaysia',
    '🇦🇪 United Arab Emirates',
    '🇵🇰 Pakistan',
  ]

  return (
    <footer
      style={{
        backgroundColor: '#111216',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '72px 0 48px',
        color: '#94a3b8',
        fontSize: '14.5px',
      }}
    >
      <div className="container" style={{ maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }}>
        {/* Top Header Row: PrickyAI Logo & Gmail on Left, Social Links & Region Selector on Right */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            paddingBottom: '36px',
            marginBottom: '48px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.07)',
          }}
        >
          {/* PrickyAI Brandmark & Direct Gmail */}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '24px' }}>
            <PrickyLogo size={36} textColor="#ffffff" />

            {/* Direct Gmail contact */}
            <a
              href="mailto:prickyai@gmail.com"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-sans)',
                fontSize: '13.5px',
                color: '#cbd5e1',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.25)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#cbd5e1'
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
              }}
            >
              <Mail size={15} color="#ea4335" />
              <span>prickyai@gmail.com</span>
            </a>
          </div>

          {/* Social Links & Region Selector */}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            {/* Social Media Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                title="YouTube Walkthroughs"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e1',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ff0000')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
              >
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                title="Instagram"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e1',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#e1306c')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                title="X"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e1',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
              >
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e1',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#0077b5')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
              >
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* Discord */}
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                title="Discord Community"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#cbd5e1',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#5865f2')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
              >
                <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>

            {/* Region Selector Dropdown */}
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '8px',
                  color: '#f1f5f9',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  padding: '8px 14px',
                  transition: 'all 0.15s ease',
                }}
              >
                <span>{region}</span>
                <ChevronDown size={14} color="#94a3b8" />
              </button>

              {dropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 6px)',
                    right: 0,
                    backgroundColor: '#181b22',
                    border: '1px solid rgba(255, 255, 255, 0.14)',
                    borderRadius: '10px',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.5)',
                    zIndex: 60,
                    minWidth: '220px',
                    padding: '6px 0',
                    overflow: 'hidden',
                  }}
                >
                  {regions.map((r) => (
                    <div
                      key={r}
                      onClick={() => {
                        setRegion(r)
                        setDropdownOpen(false)
                      }}
                      style={{
                        padding: '9px 16px',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '13.5px',
                        color: region === r ? '#38bdf8' : '#e2e8f0',
                        cursor: 'pointer',
                        transition: 'background-color 0.1s',
                        backgroundColor: region === r ? 'rgba(56, 189, 248, 0.08)' : 'transparent',
                      }}
                      onMouseEnter={(e) => {
                        if (region !== r) e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
                      }}
                      onMouseLeave={(e) => {
                        if (region !== r) e.currentTarget.style.backgroundColor = 'transparent'
                      }}
                    >
                      {r}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 3 Clean, Generously Spaced Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '56px 40px',
            marginBottom: '64px',
          }}
        >
          {/* Column 1: Product */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '22px',
                letterSpacing: '-0.01em',
              }}
            >
              Product
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                fontFamily: 'var(--font-sans)',
                fontSize: '14.5px',
              }}
            >
              <li>
                <a
                  href="#features"
                  style={{ color: '#94a3b8', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  PrickyAI for School
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  style={{ color: '#94a3b8', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  PrickyAI for University
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  style={{ color: '#94a3b8', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  PrickyAI for Teachers
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  style={{ color: '#94a3b8', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  PrickyAI for Parents
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  style={{ color: '#94a3b8', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  iOS app
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  style={{ color: '#94a3b8', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  Android app
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '22px',
                letterSpacing: '-0.01em',
              }}
            >
              Company
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                fontFamily: 'var(--font-sans)',
                fontSize: '14.5px',
              }}
            >
              <li>
                <a
                  href="#features"
                  style={{ color: '#94a3b8', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  style={{ color: '#94a3b8', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  Safety
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  style={{ color: '#94a3b8', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  style={{ color: '#94a3b8', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  style={{ color: '#94a3b8', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  style={{ color: '#94a3b8', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  Modern slavery
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '14px',
                fontWeight: 600,
                color: '#ffffff',
                marginBottom: '22px',
                letterSpacing: '-0.01em',
              }}
            >
              Resources
            </h4>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                fontFamily: 'var(--font-sans)',
                fontSize: '14.5px',
              }}
            >
              <li>
                <a
                  href="#blogs"
                  style={{ color: '#94a3b8', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  style={{ color: '#94a3b8', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  Changelog
                </a>
              </li>
              <li>
                <a
                  href="#subjects"
                  style={{ color: '#94a3b8', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  Past papers
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  style={{ color: '#94a3b8', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  Bursary scheme
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  style={{ color: '#94a3b8', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  Cost comparison
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  style={{ color: '#94a3b8', transition: 'color 0.15s ease' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Minimal Subtle Divider Line */}
        <div
          style={{
            height: '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            marginBottom: '32px',
          }}
        />

        {/* Bottom Bar: Disclaimer on Left + Copyright on Right */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            fontFamily: 'var(--font-sans)',
            fontSize: '12.5px',
            lineHeight: 1.6,
            color: '#64748b',
          }}
        >
          <div style={{ maxWidth: '680px' }}>
            IBO, CAIE, Cambridge Assessment, Pearson, OCR or WJEC were not involved in the production of, and do not endorse, the resources or AI tutoring provided on the PrickyAI platform.
          </div>

          <div style={{ color: '#475569', fontSize: '12px' }}>
            © {new Date().getFullYear()} PrickyAI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
