import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PresentationSection } from './components/PresentationSection';
import { ProblemSection } from './components/ProblemSection';
import { WhySection } from './components/WhySection';
import { ManualSection } from './components/ManualSection';
import { SolutionSection } from './components/SolutionSection';
import { TestimonialsMetricsSection } from './components/TestimonialsMetricsSection';
import { ForBusinessSection } from './components/ForBusinessSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ForBusinessSection />
      <PresentationSection />
      <ProblemSection />
      <WhySection />
      <ManualSection />
      <SolutionSection />
      <TestimonialsMetricsSection />
      <CTASection />
      <Footer />
    </div>
  );
}