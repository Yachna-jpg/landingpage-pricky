'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LearningStage from '@/components/LearningStage'
import Features from '@/components/Features'
import Subjects from '@/components/Subjects'
import FeaturesWithPanel from '@/components/ui/features-with-panel'
import Testimonials from '@/components/Testimonials'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Blogs from '@/components/Blogs'
import BottomCTA from '@/components/BottomCTA'
import Footer from '@/components/Footer'
import LeadModal from '@/components/LeadModal'

export default function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalSource, setModalSource] = useState('Landing Page Hero')

  const handleOpenModal = (source?: string) => {
    setModalSource(source || 'Landing Page Interactive Action')
    setModalOpen(true)
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation - Only Product, Pricing, FAQ, Blogs */}
      <Navbar onOpenLeadModal={handleOpenModal} />

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {/* Hero Section with video.mp4 */}
        <Hero onOpenLeadModal={handleOpenModal} />

        {/* Persona Track Selector */}
        <LearningStage onOpenLeadModal={handleOpenModal} />

        {/* Precision Features (Target of "Product" navbar link) */}
        <div id="features">
          <Features />
        </div>

        {/* Cambridge Subjects */}
        <Subjects onOpenLeadModal={handleOpenModal} />

        {/* Why students love Pricky (Features with Panel) */}
        <FeaturesWithPanel />

        {/* Social Proof & Testimonials */}
        <div id="testimonials">
          <Testimonials />
        </div>

        {/* Pricing Plans (Target of "Pricing" navbar link) */}
        <div id="pricing">
          <Pricing onOpenLeadModal={handleOpenModal} />
        </div>

        {/* FAQ Accordion (Target of "FAQ" navbar link) */}
        <div id="faq">
          <FAQ />
        </div>

        {/* Cambridge Revision Blogs & Examiner Analysis (Target of "Blogs" navbar link) */}
        <div id="blogs">
          <Blogs onOpenLeadModal={handleOpenModal} />
        </div>

        {/* Bottom Banner CTA */}
        <BottomCTA onOpenLeadModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Lead Capture Modal connected to Payload CRM */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        source={modalSource}
      />
    </div>
  )
}
