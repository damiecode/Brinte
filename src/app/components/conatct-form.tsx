'use client';

import { DownOutlined } from '@ant-design/icons';
import {
  Button,
  Col,
  Dropdown,
  Form,
  Input,
  MenuProps,
  Row,
  Select,
} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';

const ContactForm = () => {
  const [processing, setProcessing] = useState(false);
  const options = [
    'Search engine',
    'Recommended by friends or colleague',
    'Social media',
    'Blog or publication',
    'Others',
  ];

  const [isFilled, setIsFilled] = useState({
    firstName: false,
    lastName: false,
    email: false,
    companyName: false,
    url: false,
    message: false,
    how: false,
  });

  const handleFinish = () => {
    setProcessing(true);
  };

  const handleInputChange = (
    e: { target: { value: string | any[] } },
    field: any,
  ) => {
    setIsFilled((prevState) => ({
      ...prevState,
      [field]: e.target.value.length > 0,
    }));
  };
  return (
    <section
      className="contact-page-container bg-white flex items-start justify-between"
      style={{
        padding: '128px 395px',
        gap: '32px',
        top: '64px',
      }}
    >
      <div className="flex w-full justify-around">
        <div className="flex flex-col justify-start">
          <div className="text-[72px] leading-normal w-1/2">Contact Sales</div>
          <p className="text-[20px] text-[#5E5E60] w-1/2">
            Send us a message and we’ll promptly get back to you.
          </p>
        </div>

        <Form
          layout="vertical"
          initialValues={{ remember: true }}
          data-testid="form"
          onFinish={handleFinish}
          requiredMark={false}
          className="w-1/2"
        >
          <Row gutter={[8, 0]}>
            <Col span={12}>
              <Form.Item
                label="First name"
                name="first_name"
                rules={[
                  {
                    required: true,
                    message: 'First Name is required',
                  },
                ]}
              >
                <Input
                  size="large"
                  type="text"
                  className={`borderless-input ${isFilled.firstName ? 'filled' : ''}`}
                  placeholder="First name"
                  onChange={(e) => handleInputChange(e, 'firstName')}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Last name"
                name="last_name"
                rules={[
                  {
                    required: true,
                    message: 'Last Name is required',
                  },
                ]}
              >
                <Input
                  size="large"
                  type="text"
                  className={`borderless-input ${isFilled.lastName ? 'filled' : ''}`}
                  placeholder="Last name"
                  onChange={(e) => handleInputChange(e, 'lastName')}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Email address is required',
                  },
                  {
                    type: 'email',
                    message: 'Please enter a valid email address',
                  },
                ]}
              >
                <Input
                  placeholder="Email"
                  size="large"
                  type="email"
                  className={`borderless-input ${isFilled.email ? 'filled' : ''}`}
                  onChange={(e) => handleInputChange(e, 'email')}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Company name"
                name="company_name"
                rules={[
                  {
                    required: true,
                    message: 'Company name is required',
                  },
                ]}
              >
                <Input
                  placeholder="Company name"
                  size="large"
                  type="text"
                  onChange={(e) => handleInputChange(e, 'companyName')}
                  className={`borderless-input ${isFilled.companyName ? 'filled' : ''}`}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Website URL"
                name="url"
                rules={[
                  {
                    required: true,
                    message: 'Website URL is required',
                  },
                ]}
              >
                <Input
                  placeholder="Website URL"
                  size="large"
                  type="text"
                  onChange={(e) => handleInputChange(e, 'url')}
                  className={`borderless-input ${isFilled.url ? 'filled' : ''}`}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name="how"
                label="How did you find us?"
                rules={[
                  {
                    required: true,
                    message: 'Please select an option',
                  },
                ]}
                className="custom-select"
              >
                <Select
                  showSearch
                  size="large"
                  placeholder="How did you find us?"
                  suffixIcon={
                    <DownOutlined className="flex justify-center items-center" />
                  }
                  className={`custom-select ${isFilled.how ? 'filled' : ''}`}
                  onChange={(value) =>
                    handleInputChange({ target: { value } }, 'how')
                  }
                  options={options.map((option) => ({
                    value: option,
                    label: option,
                  }))}
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                label="Message"
                name="message"
                rules={[
                  {
                    required: true,
                    message: 'Message is required',
                  },
                ]}
              >
                <TextArea
                  rows={4}
                  placeholder="Message"
                  maxLength={10}
                  className={`borderless-input ${isFilled.message ? 'filled' : ''}`}
                />
              </Form.Item>
            </Col>
          </Row>

          <Button
            type="primary"
            size="large"
            htmlType="submit"
            loading={processing}
          >
            {processing ? `sending message...` : `Contact sales`}
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;
