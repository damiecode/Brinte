'use client';

import React, { useState } from 'react';
import { Button, Image, Tag } from 'antd';
import '@/styles/navbar.css';

const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState('Contact');

  const navItems = [
    'Products',
    'Customers',
    'Docs',
    'Our Story',
    'Pricing',
    'Contact',
  ];

  return (
    <header className="bg-white left-0 w-full flex items-center z-50 justify-between p-4 fixed top-0">
      <div className={`flex items-center space-x-2`}>
        <Image
          src="/images/Logo.png"
          alt="Logo"
          width={96}
          height={24}
          preview={false}
        />
        <Tag
          color="processing"
          className="rounded-[24px] text-[8px] font-semibold pt-[5px] pr-[8px] pb-[5px] pl-[8px]"
          bordered={false}
        >
          BETA
        </Tag>
      </div>

      <div className="items-center space-x-4 text-[#101010]">
        {navItems.map((text) => (
          <Button
            key={text}
            type="link"
            href="#"
            className={`navbar-button ${
              activeNav === text ? 'active-nav' : 'inactive-nav'
            }`}
            onClick={() => setActiveNav(text)}
          >
            {text}
          </Button>
        ))}
      </div>

      <div>
        <Button type="link" href="#" className="navbar-button">
          Login
        </Button>
        <Button type="primary" className="navbar-primary-button">
          Join waitlist
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
