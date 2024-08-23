import Navbar from '@/app/reusables/NavBar';
import React from 'react';
import Footer from '../reusables/Footer';
import Resources from './resources';
import ContactForm from './conatct-form';
import Head from 'next/head';

export function LandingPage() {
  return (
    <>
      <Head>
        <title>Brinte - Contact Us | Your Reliable Partner</title>
        <meta
          name="description"
          content="Get in touch with Brinte. We are here to help you with all your queries. Fill out our contact form or explore our resources."
        />
        <meta
          name="keywords"
          content="Brinte, Contact, Resources, Support, Customer Service"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          property="og:title"
          content="Brinte - Contact Us | Your Reliable Partner"
        />
        <meta
          property="og:description"
          content="Get in touch with Brinte. We are here to help you with all your queries."
        />
        <meta property="og:image" content="/path/to/your-image.jpg" />
        <meta property="og:url" content="https://www.brinte.com/contact" />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="flex flex-col lg:min-h-screen">
        <Navbar />
        <div className="lg:flex-grow">
          <ContactForm />
          <Resources />
        </div>
        <Footer />
      </section>
    </>
  );
}
