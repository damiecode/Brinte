'use client';

import React from 'react';
import { Button, Image } from 'antd';
import Link from 'next/link';
import {
  LinkedinOutlined,
  SlackOutlined,
  XOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import '@/styles/navbar.css';

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4 bg-[#e0e1e3] mt-auto">
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Image src="/images/dots.png" alt="Dot" preview={false} />
      </div>
      <div className="container flex flex-wrap items-center justify-around mt-10 mx-auto">
        <div>
          <Image
            src="/images/Logomark.png"
            width={30}
            alt="Logo"
            preview={false}
          />
        </div>

        <div className="flex justify-between space-x-20">
          <div className="flex flex-col items-start mb-6">
            <h3 className="text-[12px] mb-5 uppercase text-[#909092] font-bold">
              Resources
            </h3>
            <ul className="space-y-5">
              <li>
                <Link
                  href="/company"
                  className="text-[#464649] font-bold text-[13px] hover:text-white"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-[#464649] font-bold text-[13px] hover:text-white"
                >
                  Customers
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[#464649] font-bold text-[13px] hover:text-white"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[#464649] font-bold text-[13px] hover:text-white"
                >
                  Our story
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[#464649] font-bold text-[13px] hover:text-white"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start mb-6">
            <h3 className="text-[12px] mb-5 uppercase text-[#909092] font-bold">
              Connect with us
            </h3>
            <ul className="space-y-5">
              <li>
                <Link
                  href="/company"
                  className="text-[#464649] font-bold text-[13px] hover:text-white"
                >
                  <LinkedinOutlined /> LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-[#464649] font-bold text-[13px] hover:text-white"
                >
                  <XOutlined /> X
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[#464649] font-bold text-[13px] hover:text-white"
                >
                  <YoutubeOutlined /> Youtube
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[#464649] font-bold text-[13px] hover:text-white"
                >
                  <SlackOutlined /> Slack
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center mb-6">
            <h3 className="text-[12px] mb-5 uppercase text-[#909092] font-bold">
              Legal
            </h3>
            <ul className="space-y-5">
              <li>
                <Link
                  href="/company"
                  className="text-[#464649] font-bold text-[13px] hover:text-white"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-[#464649] font-bold text-[13px] hover:text-white"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 flex mb-32 justify-around ">
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
