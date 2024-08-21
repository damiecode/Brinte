import type { Metadata } from 'next';
import React from 'react';
import 'antd/dist/reset.css';
import '@/styles/globals.css';

import PageWrapper from '@/app/pageWrapper';

export const metadata: Metadata = {
  title: 'News App',
  description: 'News App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images//Logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" href="/Logo.png" />
        <link rel="stylesheet" href="/src/styles/globals.css" />
        <script src="https://js.paystack.co/v2/inline.js" async></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          //   crossOrigin
        />
      </head>
      <body>
        <div id="root">
          <PageWrapper>{children}</PageWrapper>
        </div>
      </body>
    </html>
  );
}
