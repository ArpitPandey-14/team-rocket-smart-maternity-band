import React, { useState } from 'react';
import Preloader from './components/common/Preloader';
import ScrollProgress from './components/common/ScrollProgress';
import Navbar from './components/common/Navbar';
import MedicalDisclaimer from './components/common/MedicalDisclaimer';

import Hero from './components/hero/Hero';
import ProblemSection from './components/narrative/ProblemSection';
import SolutionSection from './components/narrative/SolutionSection';
import ProductExplorer from './components/lab/ProductExplorer';
import MechanicalSystem from './components/engineering/MechanicalSystem';
import SystemArchitecture from './components/engineering/SystemArchitecture';
import HowItWorks from './components/engineering/HowItWorks';
import TechnologyStack from './components/engineering/TechnologyStack';
import MobileAppDemo from './components/mobile/MobileAppDemo';
import SafetySection from './components/safety/SafetySection';
import SOSDemo from './components/safety/SOSDemo';
import Feasibility from './components/validation/Feasibility';
import Viability from './components/validation/Viability';
import ImpactSection from './components/validation/ImpactSection';
import Benefits from './components/validation/Benefits';
import WhyItMatters from './components/validation/WhyItMatters';
import PrivacySection from './components/validation/PrivacySection';
import LimitationsSection from './components/validation/LimitationsSection';
import TeamSection from './components/team/TeamSection';
import FinalCTA from './components/footer/FinalCTA';
import Footer from './components/footer/Footer';

export default function App() {
  const [sosModalOpen, setSosModalOpen] = useState(false);
  const [activeSensorInExplorer, setActiveSensorInExplorer] = useState('hr');

  const handleSelectSensorFromHero = (sensorId) => {
    setActiveSensorInExplorer(sensorId);
    const lab = document.getElementById('product-lab');
    if (lab) lab.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#FAFBFD] text-slate-900 flex flex-col selection:bg-sky-100 selection:text-sky-900">
      {/* 1. Preloader */}
      <Preloader />

      {/* 2. Scroll Progress */}
      <ScrollProgress />

      {/* Top Medical Notice Banner */}
      <MedicalDisclaimer />

      {/* 3. Sticky Navigation */}
      <Navbar onOpenSOS={() => setSosModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onSelectSensor={handleSelectSensorFromHero} />

        {/* Narrative Chapters */}
        <ProblemSection />
        <SolutionSection />

        {/* Product Lab & Sensor Interactive Inspector */}
        <ProductExplorer 
          activeSensorId={activeSensorInExplorer} 
          onSelectSensor={setActiveSensorInExplorer} 
        />

        {/* Mechanical Engineering Deep Dive */}
        <MechanicalSystem />

        {/* System Architecture */}
        <SystemArchitecture />

        {/* How It Works 6-Step Timeline */}
        <HowItWorks />

        {/* Technology Stack & BOM Reference */}
        <TechnologyStack />

        {/* Mobile App Simulation with Recharts & Today/Trends/Guidance */}
        <MobileAppDemo onOpenSOS={() => setSosModalOpen(true)} />

        {/* Safety First Architecture */}
        <SafetySection onOpenSOS={() => setSosModalOpen(true)} />

        {/* Engineering Feasibility & Scalable Viability */}
        <Feasibility />
        <Viability />

        {/* Project Impact */}
        <ImpactSection />

        {/* Core Benefits */}
        <Benefits />

        {/* Why It Matters Matrix */}
        <WhyItMatters />

        {/* Data Privacy & Local-First Security */}
        <PrivacySection />

        {/* Known Limitations & Open Engineering Questions */}
        <LimitationsSection />

        {/* Team Rocket Showcase */}
        <TeamSection />

        {/* Final CTA Showcase */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive 30-Second SOS Simulation Modal */}
      <SOSDemo isOpen={sosModalOpen} onClose={() => setSosModalOpen(false)} />
    </div>
  );
}
