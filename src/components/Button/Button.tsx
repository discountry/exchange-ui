import React, { ButtonHTMLAttributes, FC } from "react";
import { Base } from "../../types/component";
import { cn } from "../../utils/utils";
import buttonVariants from "./styles";
import { ButtonShape, ButtonSize, ButtonVariant } from "./types";
import useTheme from "../../provider/useTheme";

export interface ButtonProps extends Base, ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button type
   */
  variant?: ButtonVariant;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Button state
   */
  disabled?: boolean;
  /**
   * Element placed before the children
   */
  startIcon?: React.ReactNode;
  /**
   * Element placed after the children
   */
  endIcon?: React.ReactNode;

  icon?: React.ReactNode;

  size: ButtonSize;

  shape?: ButtonShape;

  children?: React.ReactNode;
}

export const Button = ({
  size = "large",
  disabled = false,
  variant = "primary",
  children,
  startIcon,
  endIcon,
  icon,
  onClick,
  shape = "normal",
  className = "",
  theme: mode,
  ...props
}: ButtonProps) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const { theme } = useTheme();

  const buttonProps = {
    variant,
    size,
    theme: mode ? mode : theme,
    shape,
    disabled
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${cn(buttonVariants(buttonProps))} ${className}`}
      disabled={disabled}
      {...props}>
      {startIcon && <span className="eui-mr-[9.5px]">{startIcon}</span>}
      {children}
      {endIcon && <span className="eui-ml-[9.5px] eui-flex eui-items-center">{endIcon}</span>}
      {icon}
    </button>
  );
};

const WhiteButton: FC<ButtonProps> = (props) => {
  const { theme } = useTheme();
  return (
    <Button
      {...props}
      variant="ghost"
      className={`eui-border-light-background eui-text-light-background ${
        theme === "light" ? "hover:!eui-text-light-primary" : "hover:!eui-text-dark-primary"
      }  eui-font-medium hover:!eui-bg-light-background`}></Button>
  );
};

Button.WhiteButton = WhiteButton;
