import { cva } from "class-variance-authority";

const itemStyles = cva("eui-cursor-pointer", {
  variants: {
    size: {
      small: "eui-text-[14px]",
      medium: "eui-text-[14px]",
      large: "eui-text-[16px]"
    }
  }
});

const itemActStyles = cva(
  "after:eui-mt-[8px] after:eui-block after:eui-h-[2px] after:eui-w-[32px]"
);

const smallActStyles = cva("", {
  variants: {
    theme: {
      light: "eui-text-light-primary",
      dark: "eui-text-dark-primary"
    }
  }
});

const defaultActStyles = cva("", {
  variants: {
    theme: {
      light: "eui-text-light-label after:eui-bg-light-primary",
      dark: "eui-text-dark-label  after:eui-bg-dark-primary"
    }
  }
});

const noActStyles = cva("", {
  variants: {
    theme: {
      light: "eui-text-light-label-40",
      dark: "eui-text-dark-label-40"
    }
  }
});

const noSmallActStyles = cva("", {
  variants: {
    theme: {
      light: "eui-text-light-label",
      dark: "eui-text-dark-label"
    }
  }
});

const borderSyles = cva("eui-border-b-[1px] eui-px-[16px]", {
  variants: {
    theme: {
      light: "eui-border-light-line-primary",
      dark: "eui-border-dark-line-primary"
    }
  }
});

export {
  itemStyles,
  itemActStyles,
  defaultActStyles,
  smallActStyles,
  noActStyles,
  noSmallActStyles,
  borderSyles
};
