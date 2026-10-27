import React from 'react'
import Image from 'next/image'

interface PrickyLogoProps {
  size?: number
  showText?: boolean
  subtitle?: string
  textColor?: string
  variant?: 'image' | 'inline'
}

export default function PrickyLogo({
  size = 36,
  showText = true,
  subtitle,
  textColor,
  variant = 'image',
}: PrickyLogoProps) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
      {/* Official Transparent Brand Logo Image */}
      <div style={{ position: 'relative', height: `${size}px`, display: 'flex', alignItems: 'center' }}>
        <Image
          src={textColor === '#ffffff' ? '/PrickyAI%20Logo%20on%20Transparent%20Background%20white.png' : '/PrickyAI%20Logo%20on%20Transparent%20Background.png'}
          alt="PrickyAI"
          width={136}
          height={34}
          style={{ height: `${size}px`, width: 'auto', objectFit: 'contain' }}
          priority
        />
      </div>

      {subtitle && (
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: 'var(--text-subtle)',
            borderLeft: '1px solid var(--border-medium)',
            paddingLeft: '8px',
          }}
        >
          {subtitle}
        </span>
      )}
    </div>
  )
}

