'use client';

import { Image } from 'antd';

const SuccessMessage = () => {
  return (
    <section
      className="contact-page-container bg-white flex items-start justify-between"
      style={{
        padding: '128px 395px',
        gap: '32px',
        position: 'relative',
        top: '64px',
      }}
    >
      <div className="flex w-full justify-around">
        <div className="flex flex-col justify-start">
          <div className="text-[72px] leading-normal w-1/2">Thank you</div>
          <p className="text-[20px] text-[#5E5E60] w-1/2">
            A member of our team will be in touch with you shortly.
          </p>
        </div>
        <div className="mx-14">
          <Image src="/images/Success.png" alt="Success" preview={false} />
        </div>
      </div>
    </section>
  );
};

export default SuccessMessage;
