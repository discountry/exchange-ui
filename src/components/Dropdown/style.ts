import { cva } from "class-variance-authority";

const menuItemStyles = cva(
  "eui-p-[8px] eui-tracking-[-0.2px eui-w-full eui-text-[12px] eui-leading-[18px] eui-cursor-pointer",
  {
    variants: {
      theme: {
        light:
          "eui-bg-light-background hover:eui-bg-light-fill-secondary hover:eui-text-light-label",
        dark: "eui-bg-dark-background eui-text-dark-label hover:eui-bg-dark-fill-secondary"
      }
    }
  }
);

const labelStyles = cva("", {
  variants: {
    theme: {
      light: "eui-text-light-label-60",
      dark: "eui-text-dark-label-60"
    }
  }
});

export { menuItemStyles, labelStyles };
