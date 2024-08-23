'use client';

import { Image } from 'antd';

const SuccessMessage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-around md:space-x-20 lg:space-x-10 space-y-10 md:space-y-0 ">
      <div className="flex flex-col justify-center md:justify-start items-center">
        <div className="text-[40px] md:text-[72px] leading-normal text-balance">
          Thank you
        </div>
        <div className="text-[12px] mb-3 md:mb-0 md:text-[20px] text-[#5E5E60] font-light">
          A member of our team will be in touch <br /> with you shortly
        </div>
      </div>
      <div className="flex justify-center w-full sm:w-[160px] sm:h-[160px] md:w-[240px] md:h-[240px] lg:mx-14">
        <Image src="/images/Success.png" alt="Success" preview={false} />
      </div>
    </div>
  );
};

export default SuccessMessage;
