import { cva } from "class-variance-authority";

const DividerVariants = cva("", {
  variants: {
    theme: {
      light: "eui-my-1 eui-h-px eui-border-0 eui-bg-light-line-primary",
      dark: "eui-my-1 eui-h-px eui-border-0 eui-bg-dark-line-primary"
    }
  }
});

const VerticalDividerVariants = cva("eui-h-full eui-w-px", {
  variants: {
    theme: {
      light: "eui-bg-light-label-20",
      dark: "eui-bg-dark-label-20"
    }
  }
});

export { DividerVariants, VerticalDividerVariants };
