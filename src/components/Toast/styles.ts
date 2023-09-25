import { cva } from "class-variance-authority";
import { BUITheme } from "../..";
import { BUIComponentType } from "../../types/component";

const toastVariants = cva(
  "eui-flex eui-rounded-[6px] eui-px-[18px] eui-py-[8px] eui-text-[16px] max-[600px]:eui-flex-col max-[600px]:eui-items-center max-[600px]:eui-px-[9px] max-[600px]:eui-py-[4px]  max-[600px]:eui-text-[12px]",
  {
    variants: {
      type: {
        info: "eui-bg-light-primary-14",
        success: "eui-bg-light-success-14",
        warning: "eui-bg-light-warning-14",
        danger: "eui-bg-light-danger-14"
      }
    }
  }
);

const bgStyles = cva("", {
  variants: {
    theme: {
      light: "eui-bg-light-background",
      dark: "eui-bg-dark-background"
    }
  }
});

const textStyles = cva("", {
  variants: {
    theme: {
      light: "eui-text-light-label",
      dark: "eui-text-dark-label"
    }
  }
});

const iconstyles = (type: BUIComponentType, theme: BUITheme) => {
  const colors = {
    light: {
      info: "eui-text-light-primary",
      warning: "eui-text-light-warning",
      success: "eui-text-light-success",
      danger: "eui-text-light-danger"
    },
    dark: {
      info: "eui-text-dark-primary",
      warning: "eui-text-dark-warning",
      success: "eui-text-dark-success",
      danger: "eui-text-dark-danger"
    }
  };

  return cva(
    "eui-w-[24px eui-mr-[16px] eui-h-[24px] eui-shrink-0 max-[600px]:eui-mr-[0] max-[600px]:eui-mb-[8px]",
    {
      variants: {
        theme: {
          light: colors[theme][type],
          dark: colors[theme][type]
        }
      }
    }
  )({ theme });
};

export { toastVariants, bgStyles, textStyles, iconstyles };
