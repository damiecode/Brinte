import Navbar from '@/app/reusables/NavBar';
import React from 'react';
import Footer from '../reusables/Footer';
import Resources from './resources';
import ContactForm from './conatct-form';
import SuccessMessage from './success-message';

export function LandingPage() {
  return (
    <section className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <SuccessMessage />
        <Resources />
      </div>
      <Footer />
    </section>
  );
}
