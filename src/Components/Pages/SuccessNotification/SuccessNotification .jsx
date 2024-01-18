import {notification} from "antd";
import {useNavigate} from "react-router-dom";

const SuccessNotification = () => {
  const history = useNavigate();

  const closeNotification = () => {
    notification.close("successNotification");
    history("/home");
  };

  notification.success({
    key: "successNotification",
    message: "Great!",
    description: "Your shipping was successfully.",
    onClose: closeNotification,
  });

  return null;
};

export default SuccessNotification;
