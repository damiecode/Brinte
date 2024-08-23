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
import LazyLoad from 'react-lazyload';

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4 bg-[#e0e1e3] mt-auto">
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <LazyLoad offset={100}>
          <Image src="/images/dots.png" alt="Dot" preview={false} />
        </LazyLoad>
      </div>
      <div className="container flex flex-col md:flex-row md:flex-wrap items-center justify-around mt-10 mx-auto">
        <div className="flex justify-center lg:block mb-10 md:mb-0">
          <LazyLoad offset={100}>
            <Image
              src="/images/Logomark.png"
              width={30}
              alt="Logo"
              preview={false}
            />
          </LazyLoad>
        </div>

        <div className="flex flex-col md:flex-row justify-center md:justify-between space-y-10 md:space-y-0 md:space-x-20">
          <div className="flex flex-col items-center md:items-start mb-6">
            <h3 className="text-[12px] mb-5 uppercase text-[#909092] font-bold">
              Resources
            </h3>
            <ul className="space-y-5">
              <li>
                <Link
                  href="/company"
                  className="text-[#464649] font-bold text-[13px] hover:text-[#909092]"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-[#464649] font-bold text-[13px] hover:text-[#909092]"
                >
                  Customers
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[#464649] font-bold text-[13px] hover:text-[#909092]"
                >
                  Docs
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[#464649] font-bold text-[13px] hover:text-[#909092]"
                >
                  Our story
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[#464649] font-bold text-[13px] hover:text-[#909092]"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-start mb-6">
            <h3 className="text-[12px] mb-5 uppercase text-[#909092] font-bold">
              Connect with us
            </h3>
            <ul className="space-y-5">
              <li>
                <Link
                  href="/company"
                  className="text-[#464649] font-bold text-[13px] hover:text-[#909092]"
                >
                  <LinkedinOutlined /> LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-[#464649] font-bold text-[13px] hover:text-[#909092]"
                >
                  <XOutlined /> X
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-[#464649] font-bold text-[13px] hover:text-[#909092]"
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
                  className="text-[#464649] font-bold text-[13px] hover:text-[#909092]"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-[#464649] font-bold text-[13px] hover:text-[#909092]"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 flex flex-col md:flex-row space-y-5 md:space-y-0 mb-32 justify-center md:justify-around ">
        <div className="text-[13px] text-[#464649] flex justify-center items-center">
          <div className="relative inline-flex items-center justify-center mr-2">
            <div className="w-4 h-4 bg-[#2AAF2A]/[0.40] rounded-full"></div>
            <div className="absolute w-[10px] h-[10px] bg-[#2AAF2A] rounded-full"></div>
          </div>
          Sage Studio. All systems operational.
        </div>
        <p className="text-[13px] text-[#5E5E60] flex justify-center">
          © Brinte 2024
        </p>
      </div>
      <div className="lg:mx-14">
        <LazyLoad offset={100}>
          <Image src="/images/Wordmark.png" alt="Logo" preview={false} />
        </LazyLoad>
      </div>
    </footer>
  );
};

export default Footer;
