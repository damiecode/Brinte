'use client';

import React from 'react';
import { Button, Image } from 'antd';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#464649]/[0.16] bottom-0 left-0 w-full p-4">
      <div className="container mx-auto flex flex-wrap items-center justify-around mt-10 mb-32 px-4">
        <div className="flex items-center space-x-8 -z-10">
          <Image src="/images/Logomark.png" width={30} alt="Logo" />
        </div>

        <div className="flex-grow flex justify-between space-x-2">
          <div className="flex flex-col items-center mb-6">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/company"
                  className="text-gray-400 hover:text-white"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-white">
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-400 hover:text-white"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center mb-6">
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/consulting"
                  className="text-gray-400 hover:text-white"
                >
                  Consulting
                </Link>
              </li>
              <li>
                <Link
                  href="/development"
                  className="text-gray-400 hover:text-white"
                >
                  Development
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-gray-400 hover:text-white"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center mb-6">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-gray-400 hover:text-white"
                >
                  Support Center
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 mb-32 flex justify-around">
        <div className="text-[13px] text-[#464649] flex items-center">
          <div className="relative inline-flex items-center justify-center mr-2">
            <div className="w-4 h-4 bg-[#2AAF2A]/[0.40] rounded-full"></div>
            <div className="absolute w-[10px] h-[10px] bg-[#2AAF2A] rounded-full"></div>
          </div>
          Sage Studio. All systems operational.
        </div>
        <p className="text-[13px] text-[#5E5E60]">© Brinte 2024</p>
      </div>
      <div className="mx-14">
        <Image src="/images/Wordmark.png" alt="Logo" preview={false} />
      </div>
    </footer>
  );
};

export default Footer;
