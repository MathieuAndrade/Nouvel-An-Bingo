import { notification } from 'antd';

const notificationWithIcon = (type, title, message) => {
    notification[type]({
        message: title,
        description: message,
        placement: 'bottomRight',
    });
};

export default notificationWithIcon;
