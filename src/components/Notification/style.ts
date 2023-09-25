import { cva } from "class-variance-authority";
import { BUIComponentType, BUITheme } from "../../types/component";

const bgStyles = cva("", {
  variants: {
    theme: {
      light: "eui-bg-light-background",
      dark: "eui-bg-dark-background"
    }
  }
});

const textStyles = cva(
  "eui-w-[296px] eui-break-words eui-text-[14px] eui-font-normal eui-leading-[20px]",
  {
    variants: {
      theme: {
        light: "eui-text-light-label",
        dark: "eui-text-dark-label"
      }
    }
  }
);

const textbg = cva("", {
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

  return cva("eui-w-[24px eui-mr-[16px] eui-h-[24px]", {
    variants: {
      theme: {
        light: colors[theme][type],
        dark: colors[theme][type]
      }
    }
  })({ theme });
};

const closeIconStyles = cva("eui-shrink-0 eui-cursor-pointer", {
  variants: {
    theme: {
      dark: "eui-text-dark-label",
      light: "eui-text-light-label-40"
    }
  }
});

export { iconstyles, bgStyles, textStyles, closeIconStyles, textbg };
