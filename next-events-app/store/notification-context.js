import { createContext } from 'react';

const NotificationContext = createContext({
  notification: null, // {title, message, status}
  showNotification: () => {},
  hideNotification: () => {},
});

export default NotificationContext;
