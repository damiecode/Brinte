'use client';

import { Button, Col, Dropdown, Form, Input, Row } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const ContactForm = () => {
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
          <div className="text-[72px] leading-normal w-1/2">Contact Sales</div>
          <p className="text-[20px] text-[#5E5E60] w-1/2">
            Send us a message and we’ll promptly get back to you.
          </p>
        </div>

        <Form
          layout="vertical"
          initialValues={{ remember: true }}
          data-testid="form"
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
                  className="borderless-input bg-[#F2F2F3]"
                  placeholder="First name"
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
                  className="borderless-input bg-[#F2F2F3]"
                  placeholder="Last name"
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
                  className="borderless-input bg-[#F2F2F3]"
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
                  className="borderless-input bg-[#F2F2F3]"
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
                  className="borderless-input bg-[#F2F2F3]"
                />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Dropdown
                menu={{}}
                placement="bottomLeft"
                arrow
                trigger={['hover']}
              >
                <Form.Item
                  name="how"
                  label="How did you find us?"
                  rules={[
                    {
                      required: true,
                      message: 'Please select an option',
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="How did you find us?"
                    className="borderless-input bg-[#F2F2F3]"
                  />
                </Form.Item>
              </Dropdown>
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
                  maxLength={6}
                  className="borderless-input bg-[#F2F2F3]"
                />
              </Form.Item>
            </Col>
          </Row>

          <Button type="primary" size="large" htmlType="submit">
            Contact sales
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;
