'use client';

import React from 'react';
import { ConfigProvider } from 'antd';
import '@/styles/globals.css';

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
       <>
         <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#824FE7',
              fontFamily: "'Poppins', sans-serif",
            },

            components: {
              Button: {
                borderRadius: 8,
              },

              Checkbox: {
                fontSizeLG: 40,
              },
            },
          }}
        >
          {children}
        </ConfigProvider>
       </>
  );
}
