import React from 'react';
import { Button, Image } from 'antd';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#464649]/[0.16] bottom-0 left-0 w-full z-50 p-4 fixed">
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="flex items-center">
          <Image src="/images/logo.png" alt="Logo" width={52} height={32} />
        </div>

        <div className="flex flex-row items-start md:items-center md:space-y-0 md:space-x-4 text-black md:text-primary font-light mt-4 md:mt-0">
          <Button
            type="link"
            href="#"
            className="text-[14px] md:text-[20px] no-underline bg-transparent border-none text-black md:text-primary font-light"
          >
            Features
          </Button>
          <Button
            type="link"
            href="#"
            className="text-[14px] md:text-[20px] no-underline bg-transparent border-none text-black md:text-primary font-light"
          >
            Benefits
          </Button>
          <Button
            type="link"
            href="#"
            className="text-[14px] md:text-[20px] no-underline bg-transparent border-none text-black md:text-primary font-light"
          >
            FAQs
          </Button>
        </div>
      </div>

      <div className="w-full mt-10 mb-32 flex justify-around">
        <p className="text-[13px] text-[#464649] flex items-center">
          <div className="relative inline-flex items-center justify-center mr-2">
            <div className="w-4 h-4 bg-[#2AAF2A]/[0.40] rounded-full"></div>
            <div className="absolute w-[10px] h-[10px] bg-[#2AAF2A] rounded-full"></div>
          </div>
          Sage Studio. All systems operational.
        </p>
        <p className="text-[13px] text-[#5E5E60]">© Brinte 2024</p>
      </div>
      <div className="mx-14">
        <Image src="/images/Wordmark.png" alt="Logo" preview={false} />
      </div>
    </footer>
  );
};

export default Footer;
