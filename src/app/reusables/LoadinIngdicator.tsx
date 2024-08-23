import react from 'react';
import { Spin } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const antIcon = <SettingOutlined style={{ fontSize: 24 }} spin />;

const CustomSpinner = () => <Spin indicator={antIcon} />;

export default CustomSpinner;
