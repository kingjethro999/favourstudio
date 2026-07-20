import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import About from '@/components/About';
import Work from '@/components/Work';
import Services from '@/components/Services';
import Tools from '@/components/Tools';
import WhyMe from '@/components/WhyMe';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Work />
        <Services />
        <Tools />
        <WhyMe />
        <Resume />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
