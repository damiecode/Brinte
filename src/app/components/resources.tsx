'use client';

import {
  ArrowUpOutlined,
  LayoutOutlined,
  ReadOutlined,
  SlackOutlined,
} from '@ant-design/icons';
import { Card } from 'antd';

const Resources = () => {
  return (
    <section
      className="contact-page-container bg-[#F2F2F3] flex items-start justify-between -z-10"
      style={{
        padding: '128px 395px',
        gap: '32px',
        top: '64px',
      }}
    >
      <div className="flex flex-col w-full justify-around">
        <div className="flex flex-col justify-center mb-10 mx-14">
          <div className="text-[72px] leading-normal w-1/2">
            Helpful resources
          </div>
          <p className="text-[20px] text-[#5E5E60] w-1/2">
            Find helpful tools, tips, and materials from our community, help
            center, and docs.
          </p>
        </div>
        <div className="flex mx-14 space-x-5">
          <div className="flex space-x-5 relative">
            <Card
              style={{
                boxShadow: `
          0px 0.5px 0px 0px #565E7114,
          0px 0.5px 0px 0px #3F47591F,
          0px 1px 0.5px 0px #00000029
        `,
              }}
              className="bg-[#D2BCFF] hover:bg-[#BA9AFF] rounded-[24px] relative flex flex-col justify-between h-[372px] w-[317px] p-3"
            >
              <div className="flex items-center space-x-3">
                <ReadOutlined className="text-[14px]" />
                <div className="text-[14px] font-semibold">See Brinte Docs</div>
                <ArrowUpOutlined className="text-[14px] rotate-45" />
              </div>
              <div className="absolute bottom-4 text-[24px]">Brinte Docs</div>
            </Card>
            <div className="space-y-5">
              <Card
                style={{
                  boxShadow: `
          0px 0.5px 0px 0px #565E7114,
          0px 0.5px 0px 0px #3F47591F,
          0px 1px 0.5px 0px #00000029
        `,
                }}
                className="bg-[#FFB693] hover:bg-[#FF8C51] rounded-[24px] flex flex-col p-2 h-[178px] w-[317px] relative"
              >
                <div className="flex space-x-3 items-center">
                  <SlackOutlined className="text-[14px]" />
                  <div className="text-[14px] font-semibold">
                    Join Slack community
                  </div>
                  <ArrowUpOutlined className="text-[14px] rotate-45" />
                </div>
                <div className="absolute bottom-4 text-[24px]">
                  Brinte Community
                </div>
              </Card>
              <Card
                style={{
                  boxShadow: `
          0px 0.5px 0px 0px #565E7114,
          0px 0.5px 0px 0px #3F47591F,
          0px 1px 0.5px 0px #00000029
        `,
                }}
                className="bg-[#FEFEFF] hover:bg-[#E6E6E7] bg: p-2 rounded-[24px] flex flex-col relative h-[178px] w-[317px]"
              >
                <div className="flex space-x-3 items-center">
                  <LayoutOutlined className="text-[14px]" />
                  <div className="text-[14px] font-semibold">
                    Go to help center
                  </div>
                  <ArrowUpOutlined className="text-[14px] rotate-45" />
                </div>
                <div className="absolute bottom-4 text-[24px]">
                  Brinte Support
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
