import { FC, useEffect, useRef, useState } from "react";
import Arrow from "../../assets/icons/arrow-fill.svg";
import useAlign from "../../hooks/useAlign";
import ReactDOM from "react-dom";
import { labelStyles, menuItemStyles } from "./style";
import { useTheme } from "../..";

interface Menus {
  key: string;
  label: React.ReactNode;
}

interface DropdownProps {
  menus: Menus[];
  children: React.ReactNode;
  hideIcon?: boolean;
}

const DropMenu: FC<{ menus: Menus[]; offsetX: number; offsetY: number; close: () => void }> = ({
  menus,
  offsetX,
  offsetY,
  close
}) => {
  const { theme } = useTheme();

  return ReactDOM.createPortal(
    <div
      className="eui-absolute eui-bottom-0 eui-left-0 eui-right-0 eui-top-0 eui-z-[99999]"
      onClick={close}>
      <div
        className={`eui-absolute eui-min-w-[80px] eui-overflow-hidden eui-rounded-[4px] eui-py-[8px] ${
          theme === "light" ? " eui-shadow-card" : ""
        }`}
        style={{ left: offsetX + "px", top: offsetY + 18 + "px" }}>
        <ul>
          {menus?.map((item) => {
            return (
              <li className={menuItemStyles({ theme })} key={item.key}>
                {item.label}
              </li>
            );
          })}
        </ul>
      </div>
    </div>,
    document.body
  );
};

const Dropdown: FC<DropdownProps> = (props) => {
  const { menus, children, hideIcon = false } = props;

  const [hide, setHide] = useState(false);

  const targetRef = useRef<HTMLDivElement | null>(null);

  const { offsetX, offsetY } = useAlign(targetRef.current);

  const { theme } = useTheme();

  const changeDropdown = () => {
    setHide(!hide);
  };

  useEffect(() => {
    document.body.style.overflow = hide ? "hidden" : "";
  }, [hide]);

  return (
    <div>
      <div
        id="dropDown"
        ref={targetRef}
        className="eui-inline-flex eui-cursor-pointer eui-items-center"
        onClick={changeDropdown}>
        <span
          className={`dropdown eui-text-[12px] eui-leading-[18px] eui-tracking-[-0.2px] ${labelStyles(
            {
              theme
            }
          )}`}>
          {children}
        </span>
        {!hideIcon && (
          <Arrow
            className={`eui-h-[16px] eui-w-[16px] ${!hide ? "eui-rotate-180" : ""} ${labelStyles({
              theme
            })}`}
          />
        )}
      </div>
      {hide && (
        <DropMenu menus={menus} offsetX={offsetX} offsetY={offsetY + 10} close={changeDropdown} />
      )}
    </div>
  );
};

export { Dropdown };
