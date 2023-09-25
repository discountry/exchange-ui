import { cva } from "class-variance-authority";
import { EUITheme } from "../../types/component";

const labelStyles = cva("", {
  variants: {
    theme: {
      light: "eui-text-light-label-60",
      dark: "eui-text-dark-label-60"
    }
  }
});

const menuStyles = cva("", {
  variants: {
    theme: {
      light: "eui-bg-light-fill-secondary",
      dark: "eui-bg-dark-fill-secondary"
    }
  }
});

const activeItemStyles = cva("", {
  variants: {
    theme: {
      light: "eui-text-light-primary",
      dark: "eui-text-dark-primary"
    }
  }
});

const menuItemStyles = ({ theme, active }: { theme: EUITheme; active: boolean }) => {
  return cva(
    "eui-tracking-[-0.2px eui-w-full eui-cursor-pointer eui-p-[8px] eui-text-[12px] eui-leading-[18px]",
    {
      variants: {
        theme: {
          light: "eui-bg-light-fill-secondary hover:eui-bg-light-hover-fill-secondary",
          dark: "eui-bg-dark-fill-secondary eui-text-dark-label hover:eui-bg-dark-hover-fill-secondary"
        },
        active: {
          true: activeItemStyles({ theme })
        }
      }
    }
  )({ theme, active });
};

export { labelStyles, menuItemStyles, menuStyles };
