import { createContext, useState, useContext } from "react";
import { thumbDown, thumbUp } from "../assets";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type = "success") => {
    const id = Date.now(); // key for map and for filtering notifications
    setNotifications([...notifications, { id, message, type }]);

    setTimeout(() => {
      setNotifications((notifications) =>
        notifications.filter((notification) => notification.id !== id),
      );
    }, 3000); // Notifications disappear after 3 seconds
  };

  return (
    <NotificationContext.Provider value={addNotification}>
      {children}
      <div className="notifications-container">
        {notifications.map(({ id, message, type }, index) => (
          <div
            key={index}
            className={`notification ${type} flex gap-2 items-center`}
          >
            <p>{message}</p>
            <img src={`${type === "success" ? thumbUp : thumbDown}`} alt="" />
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};
