import { cva } from "class-variance-authority";
import { BUIComponentColor, BUITheme } from "../../types/component";

export type BadgeColor = BUIComponentColor | "info" | "secondary";

const BadgeVariants = (props: { theme: BUITheme; color: BadgeColor }) => {
  const color = {
    dark: {
      primary: "eui-bg-dark-badge-primary-bg eui-text-dark-primary",
      secondary: "eui-bg-dark-badge-secondary-bg eui-text-dark-secondary",
      danger: "eui-bg-dark-badge-danger-bg eui-text-dark-danger",
      success: "eui-bg-dark-badge-success-bg eui-text-dark-success",
      warning: "eui-bg-dark-badge-warning-bg eui-text-dark-warning",
      info: "eui-bg-dark-badge-info-bg eui-text-dark-label-60"
    },
    light: {
      primary: "eui-bg-light-badge-primary-bg eui-text-light-primary",
      secondary: "eui-bg-light-badge-secondary-bg eui-text-light-secondary",
      danger: "eui-bg-light-badge-danger-bg eui-text-light-danger",
      success: "eui-bg-light-badge-success-bg eui-text-light-success",
      warning: "eui-bg-light-badge-warning-bg eui-text-light-warning",
      info: "eui-bg-light-badge-info-bg eui-text-light-label-60"
    }
  };

  const { theme } = props;

  return cva("eui-rounded eui-px-[8px] eui-py-[2px] eui-text-[12px]", {
    variants: {
      color: {
        primary: color[theme].primary,
        secondary: color[theme].secondary,
        danger: color[theme].danger,
        success: color[theme].success,
        warning: color[theme].warning,
        info: color[theme].info
      }
    },
    defaultVariants: {
      color: "primary"
    }
  })(props);
};

export default BadgeVariants;
