import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'No Sleep Systems — Omar Medina',
  description: 'I design leverage. Theory → Architecture → Product. Open-source tools, minimal capital, maximum output.',
  openGraph: {
    title: 'No Sleep Systems — Omar Medina',
    description: 'I design leverage. Open-source tools, minimal capital, maximum output.',
    url: 'https://nosleepsystems.com',
    siteName: 'No Sleep Systems',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-void text-cream font-mono min-h-screen">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
