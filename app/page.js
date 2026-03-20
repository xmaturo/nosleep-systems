export const metadata = {
  title: 'Omar Medina — Systems Engineer & Applied Mathematician',
  description: 'I design leverage. Six projects across production systems and original research — solo, open-source, zero venture capital.',
};

import Hero from '../components/Hero';
import ProofStrip from '../components/ProofStrip';
import EthosStrip from '../components/EthosStrip';
import SignalBanner from '../components/SignalBanner';
import MarqueeStrip from '../components/MarqueeStrip';
import Lanes from '../components/Lanes';
import GlyphDivider from '../components/GlyphDivider';
import ProjectGrid from '../components/ProjectGrid';
import HireBlock from '../components/HireBlock';

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <EthosStrip />
      <SignalBanner />
      <MarqueeStrip />
      <Lanes />
      <GlyphDivider />
      <ProjectGrid />
      <GlyphDivider />
      <HireBlock />
    </>
  );
}
