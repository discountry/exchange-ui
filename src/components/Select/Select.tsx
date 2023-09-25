import { ReactNode, forwardRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { EUITheme, Tooltip, Typography, useTheme } from "../..";
import SelectArrow from "../../assets/icons/select-arrow.svg";
import useAlign from "../../hooks/useAlign";
import { keyBy } from "../../utils/helper";
import { cn } from "../../utils/utils";
import { labelStyles, menuItemStyles, menuStyles } from "./styles";

export type SelectItem = { label: string; value: string };

const SelectMenu = ({
  value,
  items,
  align,
  handleSelect,
  handleClose,
  targetRef
}: {
  value: string;
  items: SelectItem[];
  align: "left" | "right";
  handleSelect: (value: string) => void;
  handleClose: () => void;
  targetRef: React.RefObject<HTMLDivElement | null>;
}) => {
  const { theme } = useTheme();

  const { offsetY, offsetLeft, offsetRight } = useAlign(targetRef.current);

  return createPortal(
    <div
      className="eui-absolute eui-left-0 eui-top-0 eui-z-[99999] eui-h-full eui-w-screen eui-overflow-hidden"
      onClick={handleClose}>
      <div
        className={`eui-absolute eui-min-w-[80px] eui-overflow-hidden eui-rounded-[4px] eui-py-[8px] ${menuStyles(
          { theme }
        )}`}
        style={{
          left: `${align === "left" ? offsetLeft + "px" : ""}`,
          right: `${align === "right" ? offsetRight + "px" : ""}`,
          top: offsetY + 18 + "px"
        }}>
        <ul>
          {items?.map((item) => {
            return (
              <li
                className={menuItemStyles({ theme, active: value === item.value })}
                key={item.value}
                onClick={() => handleSelect(item.value)}>
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

export interface SelectProps extends React.InputHTMLAttributes<HTMLInputElement> {
  selectItems: SelectItem[];
  theme?: EUITheme;
  handleChange?: (value: string) => void;
  align?: "left" | "right";
  labelClassName?: string;
  scrollable?: boolean;
  wrapper?: (children: ReactNode) => ReactNode;
}

const Select = forwardRef<HTMLInputElement, SelectProps>((props, ref) => {
  const {
    name,
    value,
    selectItems,
    theme: mode,
    align = "left",
    handleChange,
    labelClassName,
    scrollable = false,
    wrapper,
    ...otherProps
  } = props;

  const { theme } = useTheme();

  const selectRef = useRef<HTMLDivElement | null>(null);

  const [showMenu, setShowMenu] = useState(false);

  const keyByItems = keyBy(selectItems, "value");

  const handleSelect = (value: string) => {
    setShowMenu(false);
    handleChange && handleChange(value);
  };

  const handleClose = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (!scrollable) {
      document.body.style.overflow = showMenu ? "hidden" : "";
    }
  }, [showMenu, scrollable]);

  return (
    <div className="eui-flex">
      <div
        ref={selectRef}
        className="eui-flex eui-cursor-pointer eui-select-none eui-items-center eui-justify-center eui-gap-2"
        onClick={() => setShowMenu(!showMenu)}>
        {wrapper ? (
          wrapper(
            <Typography variant="body4" className={labelClassName}>
              {keyByItems[String(value)].label}
            </Typography>
          )
        ) : (
          <Typography variant="body4" className={labelClassName}>
            {keyByItems[String(value)].label}
          </Typography>
        )}

        <SelectArrow
          className={`eui-h-[10px] eui-w-[10px] ${showMenu ? "eui-rotate-180" : ""} ${cn(
            labelStyles({
              theme: mode || theme
            })
          )}`}
        />
      </div>
      {showMenu && (
        <SelectMenu
          value={String(value)}
          items={selectItems}
          align={align}
          handleSelect={handleSelect}
          handleClose={handleClose}
          targetRef={selectRef}
        />
      )}
      <input
        className="eui-hidden"
        name={name}
        id={`eui-select-${name}`}
        type="hidden"
        ref={ref}
        value={value}
        {...otherProps}
      />
    </div>
  );
});

export default Select;
