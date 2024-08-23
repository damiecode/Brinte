import react from 'react';
import { Spin } from 'antd';
import { LoadingOutlined, SettingOutlined } from '@ant-design/icons';

const antIcon = <SettingOutlined style={{ fontSize: 24 }} spin />;

// Return value should be component
const CustomSpinner = () => <Spin indicator={antIcon} />;

export default CustomSpinner;
