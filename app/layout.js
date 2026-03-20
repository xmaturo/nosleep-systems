import './globals.css';
import localFont from 'next/font/local';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const delaGothicOne = localFont({
  src: './fonts/dela-gothic-one-latin-400-normal.woff2',
  weight: '400',
  display: 'swap',
  variable: '--font-display',
});

const spaceMono = localFont({
  src: [
    { path: './fonts/space-mono-latin-400-normal.woff2', weight: '400' },
    { path: './fonts/space-mono-latin-700-normal.woff2', weight: '700' },
  ],
  display: 'swap',
  variable: '--font-body',
});

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
      <body className={`${delaGothicOne.variable} ${spaceMono.variable} bg-void text-cream font-mono min-h-screen`}>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
