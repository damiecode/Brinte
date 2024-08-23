'use client';

import React, { useState } from 'react';
import { Button, Image, Tag } from 'antd';
import '@/styles/navbar.css';

const Navbar: React.FC = () => {
  const [activeNav, setActiveNav] = useState('Contact');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

      <button className="lg:hidden flex items-center p-2" onClick={toggleMenu}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        )}
      </button>

      <div className="hidden lg:flex items-center space-x-4 text-[#101010]">
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

      <div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden absolute top-16 left-0 w-full p-4 bg-white shadow-md`}
      >
        <div className="items-start flex flex-col space-y-4 text-[#101010]">
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
        <div className="flex flex-col items-start space-y-4 mt-2">
          <Button type="link" href="#" className="navbar-button inactive-nav">
            Login
          </Button>
          <Button type="primary" className="navbar-primary-button">
            Join waitlist
          </Button>
        </div>
      </div>

      <div className="hidden lg:flex">
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
