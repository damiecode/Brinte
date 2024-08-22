import Navbar from '@/app/reusables/NavBar';
import React from 'react';
import Footer from '../reusables/Footer';
import Resources from './resources';

export function LandingPage() {
  return (
    <section className="relative">
      <Navbar />
      <Resources />
      <Footer />
    </section>
  );
}
