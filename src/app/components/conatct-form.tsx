'use client';

import { useState } from 'react';
import SuccessMessage from './success-message';
import FormDetails from './form-details';

const ContactForm = () => {
  const [processing, setProcessing] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFinish = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <section
      className="contact-page-container px-24 py-24 md:px-0 xl:py-[128px] xl:px-[395px] bg-white flex items-center justify-center"
      style={{
        top: '64px',
      }}
    >
      {submitted ? (
        <SuccessMessage />
      ) : (
        <FormDetails handleFinish={handleFinish} processing={processing} />
      )}
    </section>
  );
};

export default ContactForm;
