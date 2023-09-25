import React, { FC, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styles from "./notification.module.scss";
import useTheme from "../../provider/useTheme";
import Info from "../../assets/icons/info.svg";
import Warning from "../../assets/icons/warning.svg";
import Success from "../../assets/icons/success.svg";
import Danger from "../../assets/icons/danger.svg";
import { BUIComponentType } from "../../types/component";
import { bgStyles, closeIconStyles, iconstyles, textStyles, textbg } from "./style";
import CloseIcon from "../../assets/icons/close.svg";
import { NoticeContext } from "../../provider/NoticeProvider";
interface NotificationMsgProps {
  title: string;
  children: React.ReactNode;
  type: BUIComponentType;
  remove: () => void;
}

const Icon: FC<{ type: BUIComponentType }> = ({ type }) => {
  const { theme } = useTheme();
  const icons = {
    info: <Info className={iconstyles(type, theme)} />,
    warning: <Warning className={iconstyles(type, theme)} />,
    success: <Success className={iconstyles(type, theme)} />,
    danger: <Danger className={iconstyles(type, theme)} />
  };

  return <>{icons[type]}</>;
};

const NotificationMsg: FC<NotificationMsgProps> = ({ title, children, type, remove }) => {
  const { theme } = useTheme();
  useEffect(() => {
    const timer = setTimeout(() => {
      remove();
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const close = () => {
    remove();
  };

  return (
    <div
      className={`eui-mb-[24px] eui-w-full eui-rounded-[6px] eui-shadow-toast ${bgStyles({
        theme
      })}`}>
      <div className="eui-flex eui-rounded-[6px] eui-px-[24px] eui-py-[16px]">
        <Icon type={type} />
        <div className="w-full eui-flex eui-flex-col">
          <div className="eui-mb-[8px] eui-flex eui-justify-between">
            <span
              className={`eui-w-[250px] eui-break-words eui-text-[16px] eui-font-medium eui-leading-[24px] eui-tracking-[-0.2px] ${textbg(
                { theme }
              )}`}>
              {title}
            </span>
            <CloseIcon onClick={close} className={closeIconStyles({ theme })} />
          </div>

          <span className={textStyles({ theme })}>{children}</span>
        </div>
      </div>
    </div>
  );
};

const NotificationContainer = () => {
  const { notificationList, remove } = useContext(NoticeContext);

  return (
    <TransitionGroup className="eui-fixed eui-bottom-[32px] eui-left-[32px] eui-z-[99999] eui-w-[384px]">
      {notificationList.map(({ title, node, id, type }) => {
        return (
          <CSSTransition
            key={id}
            timeout={300}
            classNames={{
              enter: styles["notification-enter"],
              enterActive: styles["notification-enter-active"],
              exit: styles["notification-exit"],
              exitActive: styles["notification-exit-active"]
            }}
            unmountOnExit>
            <NotificationMsg
              type={type}
              title={title}
              remove={() => {
                remove(id);
              }}>
              {node}
            </NotificationMsg>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

export const Notification = () => {
  return ReactDOM.createPortal(<NotificationContainer />, document.body);
};
