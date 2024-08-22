'use client';

import React from 'react';
import { Button, Image, Tag } from 'antd';

const Navbar: React.FC = () => {
  return (
    <header className="!bg-white left-0 w-full flex items-center z-1000 justify-between p-4 fixed">
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
        <Button
          type="link"
          href="#"
          className="px-3 py-2 rounded text-[14px] no-underline bg-transparent border-none text-[#101010]"
        >
          Products
        </Button>
        <Button
          type="link"
          href="#"
          className="px-3 py-2 rounded text-[14px] no-underline bg-transparent border-none text-[#101010]"
        >
          Customers
        </Button>
        <Button
          type="link"
          href="#"
          className="px-3 py-2 rounded text-[14px] no-underline bg-transparent border-none text-[#101010]"
        >
          Docs
        </Button>
        <Button
          type="link"
          href="#"
          className="px-3 py-2 rounded text-[14px] no-underline bg-transparent border-none text-[#101010]"
        >
          Our Story
        </Button>
        <Button
          type="link"
          href="#"
          className="px-3 py-2 rounded text-[14px] no-underline bg-transparent border-none text-[#101010]"
        >
          Pricing
        </Button>
        <Button
          type="link"
          href="#"
          className="px-3 py-2 rounded text-[14px] no-underline bg-transparent border-none text-[#101010]"
        >
          Contact
        </Button>
      </div>
      <div>
        <Button
          type="link"
          href="#"
          className="px-3 py-2 rounded text-[13px] no-underline bg-transparent border-none text-[#101010]"
        >
          Login
        </Button>
        <Button
          type="default"
          className="px-3 py-2 border-none text-[13px] bg-black text-white rounded-md"
        >
          Join waitlist
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
